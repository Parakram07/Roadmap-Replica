export const typescriptData = {
  id: 'typescript',
  title: 'TypeScript Developer',
  description: 'Master static typing: define interfaces, create reusable generics, utilize type utility modifiers, and configure tsconfig.json configurations.',
  category: 'skill',
  icon: 'Code',
  stats: {
    duration: '1-2 months',
    difficulty: 'Intermediate',
    topics: 6
  },
  phases: [
    {
      id: 'ts-phase-1',
      title: '1. Core Typings & Interfaces',
      description: 'Configure compiler options and apply strict type checks.',
      nodes: [
        {
          id: 'ts-interfaces',
          label: 'Interfaces & Type Aliases',
          importance: 'critical',
          description: 'Define object shapes, union types, type intersections, and configure compiler strictness parameters.',
          objectives: [
            'Differentiate between interfaces and type aliases.',
            'Declare union types (A | B) and intersection types (A & B).',
            'Configure strict compiler options in tsconfig.json.'
          ],
          bestPractices: [
            'Configure "strict": true in tsconfig.json to catch potential runtime crashes during compilation.',
            'Avoid using the "any" type bypass. Use "unknown" if a type is undetermined.'
          ],
          mistakes: [
            'Over-typing simple variables that TypeScript can infer automatically.',
            'Ignoring type errors using @ts-ignore comments instead of typing code correctly.'
          ],
          tips: 'Use the readonly keyword to prevent properties on objects from being mutated.',
          project: {
            name: 'Strict configuration setup',
            desc: 'Configure a tsconfig.json file with strict options, input directories, and path aliases for a React project.'
          },
          interview: [
            {
              q: 'What is the main difference between interface and type in TypeScript?',
              a: 'Interfaces are designed to describe object shapes and support declaration merging (appending properties). Type aliases can define unions, primitives, and intersections, making them highly versatile for advanced typings.'
            }
          ],
          resources: [
            { title: 'TypeScript Handbooks (Link)', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'ts-phase-2',
      title: '2. Advanced Generics & Utilities',
      description: 'Write dynamic, reusable typings.',
      nodes: [
        {
          id: 'ts-generics',
          label: 'Generics & Utility Typings',
          importance: 'critical',
          description: 'Implement reusable generic parameters, type guards (is), and utility types like Pick, Omit, and Partial.',
          objectives: [
            'Write generic functions and interface definitions.',
            'Implement type guard assertion checks.',
            'Transform interfaces using Pick, Omit, Partial, and Record.'
          ],
          bestPractices: [
            'Use standard type constraints (e.g. <T extends object>) to narrow generic boundaries.',
            'Differentiate between type assertions (as) and type guards (is).'
          ],
          mistakes: [
            'Using type assertions (as) to silence compilation errors, risking runtime crashes.'
          ],
          tips: 'Use the keyof operator to extract the keys of an object type.',
          project: {
            name: 'Generic API Payload Handler',
            desc: 'Build a generic wrapper function that calls REST APIs, types payloads dynamically, and validates responses.'
          },
          interview: [
            {
              q: 'What are Generics in TypeScript?',
              a: 'Generics allow you to write reusable code where the exact types of variables are specified dynamically at execution, maintaining type safety.'
            }
          ],
          dependsOn: ['ts-interfaces'],
          resources: [
            { title: 'TypeScript Generics Guide (Link)', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html', type: 'link' }
          ]
        }
      ]
    }
  ]
};
