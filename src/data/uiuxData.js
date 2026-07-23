export const uiuxData = {
  id: 'uiux',
  title: 'UI/UX Designer',
  description: 'Portfolio-first roadmap for product design: Figma wireframing, component design systems, UX research, user testing, and interactive prototyping.',
  category: 'tech_creative',
  icon: 'Compass',
  badge: 'Tech / Creative',
  tagline: 'Portfolio-first roadmap',
  stats: {
    duration: '4-6 months',
    difficulty: 'Intermediate',
    topics: 9
  },
  phases: [
    {
      id: 'ux-phase-1',
      title: '1. UX Research & Product Foundations',
      description: 'Master user-centered design, user interviews, wireframing, and Information Architecture.',
      nodes: [
        {
          id: 'ux-research',
          label: 'UX Research & User Journeys',
          importance: 'critical',
          description: 'Conduct qualitative interviews, create personas, map empathy maps, and define user flow diagrams.',
          objectives: [
            'Formulate user research plans and conduct user interviews.',
            'Synthesize insights into user personas and journey maps.',
            'Define Information Architecture and sitemaps.'
          ],
          bestPractices: [
            'Design for user needs based on research data, not personal visual preferences.',
            'Keep user flows clear with minimal steps to complete core tasks.'
          ],
          mistakes: [
            'Skipping research and jumping straight into visual UI design.'
          ],
          tips: 'Use FigJam or Miro to map user flow diagrams visually before building Figma screens.',
          project: {
            name: 'E-Commerce User Journey Map',
            desc: 'Map out the complete end-to-end checkout flow for a mobile shopping application based on user feedback.'
          },
          interview: [
            {
              q: 'What is the difference between UI and UX design?',
              a: 'UX (User Experience) focuses on the overall feel, usability, structure, and user journey of a product. UI (User Interface) focuses on visual design, layout aesthetics, typography, colors, and interactive elements.'
            }
          ],
          resources: [
            { title: 'Nielsen Norman Group UX Basics', url: 'https://nngroup.com', type: 'link' }
          ]
        },
        {
          id: 'figma-design-systems',
          label: 'Figma & Design Systems',
          importance: 'critical',
          description: 'Master Figma auto-layout, component variants, design tokens, responsive breakpoints, and interactive prototypes.',
          objectives: [
            'Create flexible UI components with Figma auto-layout and component variants.',
            'Build consistent design systems (color tokens, typography scales, spacing grids).',
            'Publish interactive clickable prototypes with micro-animations.'
          ],
          bestPractices: [
            'Always use Auto Layout for button containers, list items, and dynamic cards.',
            'Ensure contrast meets WCAG 2.1 AA accessibility guidelines.'
          ],
          mistakes: [
            'Creating static pixel layouts without Auto Layout or component properties.'
          ],
          tips: 'Press Shift + A in Figma to instantly convert frames into Auto Layout containers.',
          project: {
            name: 'Mobile Banking App UI System',
            desc: 'Design a high-fidelity mobile app UI system in Figma with dark/light themes and dynamic components.'
          },
          interview: [
            {
              q: 'Why are Design Systems important in team software projects?',
              a: 'Design Systems ensure visual consistency, accelerate design and development speed, reduce duplicate work, and make brand updates easy through reusable tokens and components.'
            }
          ],
          dependsOn: ['ux-research'],
          resources: [
            { title: 'Figma Learn Documentation', url: 'https://help.figma.com', type: 'link' }
          ]
        }
      ]
    }
  ]
};
