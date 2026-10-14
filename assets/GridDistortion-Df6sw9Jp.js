import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{gt as t,mt as n}from"./vendor-D0Rnnr0b.js";var r=e(t(),1),i=n(),a=`
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`,o=`
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
`;function s({imageSrc:e,className:t=``}){let n=(0,r.useRef)(null),s=(0,r.useRef)(null),c=(0,r.useRef)(null),l=(0,r.useRef)({mouseX:.5,mouseY:.5,targetMouseX:.5,targetMouseY:.5,intensity:0,targetIntensity:0,isHovered:!1});return(0,r.useEffect)(()=>{if(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches||!s.current||!e)return;let t=s.current,r=t.getContext(`webgl`,{alpha:!0,antialias:!1,powerPreference:`low-power`});if(!r)return;let i=(e,t)=>{let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n},u=r.createProgram(),d=i(r.VERTEX_SHADER,a),f=i(r.FRAGMENT_SHADER,o);r.attachShader(u,d),r.attachShader(u,f),r.linkProgram(u),r.useProgram(u);let p=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,p),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,1,-1,1,1,-1,1,0,0,-1,1,0,0,1,-1,1,1,1,1,1,0]),r.STATIC_DRAW);let m=r.getAttribLocation(u,`a_position`),h=r.getAttribLocation(u,`a_texCoord`);r.enableVertexAttribArray(m),r.vertexAttribPointer(m,2,r.FLOAT,!1,16,0),r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,16,8);let g=r.getUniformLocation(u,`u_mouse`),_=r.getUniformLocation(u,`u_intensity`),v=r.createTexture(),y=new Image;y.crossOrigin=`anonymous`,y.src=e,y.onload=()=>{r.bindTexture(r.TEXTURE_2D,v),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,y),b()},(()=>{let e=n.current?.getBoundingClientRect();if(!e)return;let i=Math.min(window.devicePixelRatio||1,2),a=Math.round(e.width*i),o=Math.round(e.height*i);(t.width!==a||t.height!==o)&&(t.width=a,t.height=o,r.viewport(0,0,a,o))})();let b=()=>{let e=l.current;e.mouseX+=(e.targetMouseX-e.mouseX)*.15,e.mouseY+=(e.targetMouseY-e.mouseY)*.15,e.intensity+=(e.targetIntensity-e.intensity)*.12,r.uniform2f(g,e.mouseX,e.mouseY),r.uniform1f(_,e.intensity),r.drawArrays(r.TRIANGLES,0,6),e.isHovered||e.intensity>.005?c.current=requestAnimationFrame(b):c.current=null},x=n.current;if(!x)return;let S=e=>{let t=x.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;l.current.targetMouseX=Math.max(0,Math.min(1,n)),l.current.targetMouseY=Math.max(0,Math.min(1,r)),l.current.targetIntensity=1,l.current.isHovered=!0,c.current||=requestAnimationFrame(b)},C=()=>{l.current.targetIntensity=0,l.current.isHovered=!1,c.current||=requestAnimationFrame(b)};return x.addEventListener(`mousemove`,S,{passive:!0}),x.addEventListener(`mouseleave`,C,{passive:!0}),()=>{c.current&&cancelAnimationFrame(c.current),x.removeEventListener(`mousemove`,S),x.removeEventListener(`mouseleave`,C),r.deleteProgram(u),r.deleteShader(d),r.deleteShader(f),r.deleteBuffer(p),r.deleteTexture(v)}},[e]),(0,i.jsx)(`div`,{ref:n,className:`w-full h-full relative ${t}`,children:(0,i.jsx)(`canvas`,{ref:s,className:`w-full h-full block`})})}export{s as default};