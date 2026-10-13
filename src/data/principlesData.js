export const PRINCIPLES = [
  {
    number: '01',
    title: 'Component Reusability & Single Responsibility',
    subtitle: 'Decoupled UI Primitives',
    desc: 'Every UI element is crafted as a self-contained component with explicit props, minimal side effects, and clear boundaries. UI primitives never mix business domain logic with layout markup.'
  },
  {
    number: '02',
    title: 'Performance-First Architecture',
    subtitle: 'Zero Unnecessary Payload',
    desc: 'Performance is built-in from day one. I prioritize small bundle sizes, dynamic code-splitting, lazy route imports, asset optimization, and zero main-thread blocking operations.'
  },
  {
    number: '03',
    title: 'Accessibility as a Core Feature',
    subtitle: 'WCAG 2.1 AA Standards',
    desc: 'Accessibility is never an afterthought. Every interaction is tested for full keyboard navigation, proper ARIA states, screen reader clarity, high contrast readability, and reduced motion safety.'
  },
  {
    number: '04',
    title: 'Resilient State & Graceful Degradation',
    subtitle: 'Defensive UI Design',
    desc: 'Interfaces must handle edge cases gracefully: loading skeletons, empty states, network chunk retry fallbacks, and human-friendly error messages rather than broken layouts or silent crashes.'
  }
];
