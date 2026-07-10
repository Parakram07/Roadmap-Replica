export const reactData = {
  id: 'react',
  title: 'React Developer',
  description: 'Learn React in depth, covering component lifecycles, advanced hook abstractions, state management, testing, and modern Server-Side frameworks.',
  category: 'skill',
  icon: 'Atom',
  stats: {
    duration: '3-5 months',
    difficulty: 'Intermediate',
    topics: 12
  },
  phases: [
    {
      id: 'react-phase-1',
      title: '1. Prerequisites & Setup',
      description: 'Prepare your JavaScript foundations and local environment.',
      nodes: [
        {
          id: 'react-js-essentials',
          label: 'JavaScript Essentials',
          importance: 'critical',
          description: 'Ensure you understand closures, arrow functions, destructuring syntax, array map/filter/reduce methods, ES modules, and async fetches.',
          objectives: [
            'Master core ES6+ functions: destructuring, rest/spread parameters, and object shorthand.',
            'Explain how array map(), filter(), and reduce() return new references rather than mutating data.',
            'Handle asynchronous promises using try/catch and async/await wrappers.'
          ],
          bestPractices: [
            'Use pure functions when writing utility methods to keep code predictable.',
            'Prefer modules (import/export) to organize code files cleanly.'
          ],
          mistakes: [
            'Mutating array variables directly (using push/splice) instead of using non-mutating methods like map/filter.',
            'Misunderstanding variable hoisting and scope rules.'
          ],
          tips: 'Practice writing basic ES6 array manipulations in a node terminal before writing React components.',
          project: {
            name: 'Array Utility Sandbox',
            desc: 'Create a library of JavaScript utility methods that group, search, and transform raw JSON array records without mutating inputs.'
          },
          interview: [
            {
              q: 'Why does React require developers to use non-mutating array operations?',
              a: 'React uses shallow reference checks to determine if state has changed. If an array is mutated directly, its memory reference remains the same, meaning React fails to detect changes and will not trigger a re-render.'
            },
            {
              q: 'What is destructuring, and how is it used in React components?',
              a: 'Destructuring extracts properties from objects/arrays into distinct variables. In React, it is commonly used to unpack variables directly from props, state, or hook return arrays: `const { title } = props`.'
            }
          ],
          resources: [
            { title: 'JavaScript for React (Video)', url: 'https://www.youtube.com/watch?v=m55PTVUrlnA', type: 'video' }
          ]
        },
        {
          id: 'vite-react-setup',
          label: 'Vite React Scaffolding',
          importance: 'critical',
          description: 'Spin up React templates using Vite, edit project folder layouts, and run development dev servers.',
          objectives: [
            'Scaffold new React environments using create-vite commands.',
            'Configure path aliases in vite.config.js for clean component imports.',
            'Manage build build pipelines and run local previews.'
          ],
          bestPractices: [
            'Keep components organized inside a src/components folder, separated by features.',
            'Set up path aliases (like @/components) early to avoid complex relative paths.'
          ],
          mistakes: [
            'Committing heavy node_modules folders to version control because of a missing gitignore.',
            'Leaving boilerplate assets (like default logos and stylesheets) in new project builds.'
          ],
          tips: 'Inspect build output metrics using the --detailed-report build flag.',
          project: {
            name: 'Custom React Project Template',
            desc: 'Configure a React boilerplate from scratch with customized paths, test plugins, and a reset styling layout.'
          },
          interview: [
            {
              q: 'What is the purpose of the vite.config.js file?',
              a: 'It configures Vite compiler rules, plugins (e.g. @vitejs/plugin-react), server ports, proxy settings, and build output directories.'
            },
            {
              q: 'Why does Vite bundle dependency modules ahead of time using esbuild?',
              a: 'Vite pre-bundles dependency packages to convert CommonJS/UMD modules into standard ES modules, and merges multi-file packages into single files to reduce HTTP request volumes during dev mode.'
            }
          ],
          dependsOn: ['react-js-essentials'],
          resources: [
            { title: 'Vite & React Guide (Article)', url: 'https://vite.dev/guide/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'react-phase-2',
      title: '2. Core Concepts',
      description: 'Master component definitions and state reactivity.',
      nodes: [
        {
          id: 'jsx-components',
          label: 'JSX & Components',
          importance: 'critical',
          description: 'Learn markup formatting, writing functional components, passing props, rendering lists, and handling click events.',
          objectives: [
            'Write clean JSX layouts returning single root nodes.',
            'Abstract visual blocks into reusable functional components.',
            'Pass dynamic variables and callback actions down as props.'
          ],
          bestPractices: [
            'Keep components focused on a single responsibility. Split large files into smaller sub-components.',
            'Ensure all lists rendered via map loops have unique, stable key props.'
          ],
          mistakes: [
            'Using array indices as keys in dynamic lists, which causes rendering bugs during item updates.',
            'Writing complex business logic directly in JSX templates instead of extracting variables.'
          ],
          tips: 'Always wrap multiple adjacent JSX nodes in a Fragment (`<>...</>`) to keep the DOM output clean.',
          project: {
            name: 'Modular Feedback Board',
            desc: 'Build a list of user feedbacks with components for cards, inputs, delete triggers, and average rating counters.'
          },
          interview: [
            {
              q: 'What is JSX, and how does the browser read it?',
              a: 'JSX is a syntax extension for JavaScript that looks like HTML. Browsers cannot read it directly; compilers (like Babel or esbuild) transpile JSX into standard JavaScript function calls (`React.createElement` or `_jsx`).'
            },
            {
              q: 'What is the difference between props and state?',
              a: 'Props are read-only configuration objects passed down from parent components. State is local, mutable data managed internally by a component that triggers UI updates when modified.'
            }
          ],
          dependsOn: ['vite-react-setup'],
          resources: [
            { title: 'React JSX Details (Link)', url: 'https://react.dev/learn/writing-markup-with-jsx', type: 'link' }
          ]
        }
      ]
    }
  ]
};
