import { useEffect, useRef } from 'react';
import './GridDistortion.css';

const VS_SOURCE = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

const FS_SOURCE = `
precision mediump float;
uniform sampler2D u_image;
uniform vec2 u_mouse;
uniform float u_intensity;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 diff = uv - u_mouse;
  float dist = length(diff);
  float radius = 0.28;
  
  if (dist < radius && u_intensity > 0.001) {
    float effect = sin(dist / radius * 3.14159) * u_intensity * 0.05;
    uv += normalize(diff) * effect;
  }
  
  gl_FragColor = texture2D(u_image, uv);
}
`;

export default function GridDistortion({
  imageSrc,
  className = ''
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const stateRef = useRef({
    mouseX: 0.5,
    mouseY: 0.5,
    targetMouseX: 0.5,
    targetMouseY: 0.5,
    intensity: 0,
    targetIntensity: 0,
    isHovered: false
  });

  useEffect(() => {
    // Only run on devices with fine pointer (desktop / mouse)
    const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || !canvasRef.current || !imageSrc) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;

    // Compile shaders
    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    const vs = createShader(gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl.FRAGMENT_SHADER, FS_SOURCE);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Buffers: full-screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,  0, 1,
         1, -1,  1, 1,
        -1,  1,  0, 0,
        -1,  1,  0, 0,
         1, -1,  1, 1,
         1,  1,  1, 0,
      ]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, 'a_position');
    const aTex = gl.getAttribLocation(program, 'a_texCoord');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(aTex);
    gl.vertexAttribPointer(aTex, 2, gl.FLOAT, false, 16, 8);

    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');

    // Texture
    const texture = gl.createTexture();
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      renderFrame();
    };

    const updateSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    updateSize();

    const renderFrame = () => {
      const state = stateRef.current;
      // Smooth interpolation
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.15;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.15;
      state.intensity += (state.targetIntensity - state.intensity) * 0.12;

      gl.uniform2f(uMouse, state.mouseX, state.mouseY);
      gl.uniform1f(uIntensity, state.intensity);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // Only continue loop if active
      if (state.isHovered || state.intensity > 0.005) {
        animFrameRef.current = requestAnimationFrame(renderFrame);
      } else {
        animFrameRef.current = null;
      }
    };

    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      stateRef.current.targetMouseX = Math.max(0, Math.min(1, x));
      stateRef.current.targetMouseY = Math.max(0, Math.min(1, y));
      stateRef.current.targetIntensity = 1;
      stateRef.current.isHovered = true;

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(renderFrame);
      }
    };

    const onMouseLeave = () => {
      stateRef.current.targetIntensity = 0;
      stateRef.current.isHovered = false;
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(renderFrame);
      }
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
      gl.deleteTexture(texture);
    };
  }, [imageSrc]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
