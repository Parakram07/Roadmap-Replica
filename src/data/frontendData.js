export const frontendData = {
  id: 'frontend',
  title: 'Frontend Developer',
  description: 'A comprehensive, step-by-step roadmap to master modern frontend engineering: from foundational web technologies to framework architecture, deployment, and performance optimization.',
  category: 'role',
  icon: 'Layout',
  stats: {
    duration: '6-9 months',
    difficulty: 'Intermediate',
    topics: 16
  },
  phases: [
    {
      id: 'phase-1',
      title: '1. The Core Web Fundamentals',
      description: 'Master the basic languages and communication models that run the entire World Wide Web.',
      nodes: [
        {
          id: 'internet',
          label: 'How the Internet Works',
          importance: 'critical',
          description: 'Learn how computers talk to each other over networks, what servers are, and the process of domain name resolution (DNS), hosting, and browser rendering.',
          objectives: [
            'Understand client-server architecture and packet routing.',
            'Explain DNS resolution (IP lookup, root/TLD/authoritative servers).',
            'Explain the critical rendering path: DOM, CSSOM, Render Tree, Layout, Paint.'
          ],
          bestPractices: [
            'Use secure HTTPS rather than insecure HTTP protocols.',
            'Leverage DNS prefetching for high-performance third-party assets.'
          ],
          mistakes: [
            'Assuming "Internet" and "World Wide Web" are synonyms.',
            'Underestimating DNS propagation times during server migrations.'
          ],
          tips: 'Use browser developer tools (Network tab) to inspect request/response headers and observe HTTP handshakes.',
          project: {
            name: 'Simple Static Server Explorer',
            desc: 'Write a small script or use tool commands to trace IP routing (traceroute) and HTTP headers of popular web portals.'
          },
          interview: [
            {
              q: 'What happens when you type a URL into a browser and press enter?',
              a: 'The browser checks cache, resolves DNS to get the server IP, performs TCP handshake (and TLS negotiation), sends an HTTP Request, receives an HTTP Response, and triggers the Critical Rendering Path (parsing HTML, building DOM/CSSOM, layout, and painting).'
            },
            {
              q: 'What is the difference between TCP and UDP?',
              a: 'TCP is connection-oriented, reliable, and guarantees order of packets via handshakes and retries, making it ideal for web traffic. UDP is connectionless, faster, but does not guarantee packet delivery, used for streaming and gaming.'
            }
          ],
          resources: [
            { title: 'How the Internet Works (Video)', url: 'https://www.youtube.com/watch?v=7_LPdttKXPc', type: 'video' },
            { title: 'MDN: Web mechanics (Article)', url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', type: 'article' },
            { title: 'DNS Explained (Article)', url: 'https://www.cloudflare.com/learning/dns/what-is-dns/', type: 'article' }
          ]
        },
        {
          id: 'html',
          label: 'HTML5',
          importance: 'critical',
          description: 'HyperText Markup Language structure. Learn about semantic tags, document outlines, standard markup elements, web forms, SEO tags, and ARIA tags for web accessibility.',
          objectives: [
            'Write clean, semantic layouts using header, nav, main, article, section, footer tags.',
            'Implement accessible forms with proper labels, helper texts, and ARIA labels.',
            'Set up SEO meta tags, Open Graph objects, and responsive viewport scaling.'
          ],
          bestPractices: [
            'Always use semantic HTML instead of nesting generic div tags.',
            'Maintain a logical heading hierarchy (H1 -> H2 -> H3) with exactly one H1 per page.'
          ],
          mistakes: [
            'Using header elements for sizing text instead of CSS font-size properties.',
            'Omitting alt attributes on img elements, breaking screen-readers.'
          ],
          tips: 'Validate your markup using the W3C markup validation service to catch nesting errors.',
          project: {
            name: 'Semantic Profile Page',
            desc: 'Build a CV website using exclusively semantic elements, ensuring zero div/span tags are used for core layouts.'
          },
          interview: [
            {
              q: 'Why are semantic elements important in HTML5?',
              a: 'Semantic tags tell the browser, search engines, and assistive devices (screen readers) exactly what content represents (e.g., article, footer), improving SEO, accessibility, and code maintainability.'
            },
            {
              q: 'What are ARIA attributes, and when should you use them?',
              a: 'Accessible Rich Internet Applications (ARIA) attributes describe UI components that cannot be described by HTML alone (e.g. status changes). They should only be used when native HTML elements do not support the required accessibility features.'
            }
          ],
          dependsOn: ['internet'],
          resources: [
            { title: 'HTML5 Full Course (Video)', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE', type: 'video' },
            { title: 'MDN Web Docs: HTML basics (Article)', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started', type: 'article' }
          ]
        },
        {
          id: 'css',
          label: 'CSS3',
          importance: 'critical',
          description: 'Cascading Style Sheets control visual presentation. Focus on Flexbox, CSS Grid layouts, Media Queries for responsive design, CSS Variables, and CSS positioning systems.',
          objectives: [
            'Master layout systems: Flexbox (aligning, wrapping) and CSS Grid (grids, templates, auto-fit/fill).',
            'Understand the Box Model (margin, border, padding, content) and box-sizing properties.',
            'Build responsive pages using mobile-first media queries and CSS custom variables.'
          ],
          bestPractices: [
            'Always set box-sizing: border-box globally to prevent padding from expanding card sizes.',
            'Organize style definitions using reusable CSS Variables for color palettes, spacing, and font sizes.'
          ],
          mistakes: [
            'Using absolute pixel dimensions (px) for layout containers, which breaks responsiveness.',
            'Overusing absolute positioning, leading to overlapping cards on different screen sizes.'
          ],
          tips: 'Use CSS custom properties (variables) for values that change (like theme colors) so you can switch classes easily.',
          project: {
            name: 'Responsive Flex Grid Dashboard',
            desc: 'Create a complex administrative dashboard with a sidebar, grid card controls, and responsive collapse behaviors using Flexbox/Grid.'
          },
          interview: [
            {
              q: 'Explain the difference between absolute, relative, fixed, and sticky positioning.',
              a: 'Relative keeps elements in normal flow and offsets them. Absolute positions elements relative to their closest positioned ancestor. Fixed is relative to the viewport. Sticky behaves relative until it reaches a scroll threshold.'
            },
            {
              q: 'What is the CSS Box Model?',
              a: 'The Box Model consists of: content (text/images), padding (clear space around content), border (surrounds padding), and margin (space between elements).'
            }
          ],
          dependsOn: ['html'],
          resources: [
            { title: 'CSS Flexbox Tutorial (Video)', url: 'https://www.youtube.com/watch?v=3YW65K62B-Q', type: 'video' },
            { title: 'CSS Grid Crash Course (Video)', url: 'https://www.youtube.com/watch?v=0-DY5x2Xv2M', type: 'video' },
            { title: 'MDN CSS Reference (Link)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'link' }
          ]
        },
        {
          id: 'javascript',
          label: 'Modern JavaScript (ES6+)',
          importance: 'critical',
          description: 'Learn logic flow, variables, arrays, objects, functions, DOM manipulation, Fetch API, and asynchronous code (Promises, async/await).',
          objectives: [
            'Master fundamental ES6+ syntax: destructuring, arrow functions, template literals, modules (import/export).',
            'Understand the Event Loop, microtasks, macrotasks, and async execution order.',
            'Perform DOM node queries, event delegations, and handle asynchronous AJAX requests via Fetch.'
          ],
          bestPractices: [
            'Always declare variables using const by default, or let if re-assignment is required. Avoid var.',
            'Use Async/Await with try/catch blocks for clean, readable asynchronous promise resolutions.'
          ],
          mistakes: [
            'Mutating objects/arrays directly instead of using copy operations (spread operator), causing state bugs.',
            'Creating memory leaks by forgetting to remove event listeners on deleted DOM nodes.'
          ],
          tips: 'Use console.dir() to inspect DOM objects and console.time() to profile slow function runtimes.',
          project: {
            name: 'Asynchronous Task Tracker',
            desc: 'Build a interactive Task Board that pulls user mock tasks from an external REST API, handles task edits, updates statuses, and saves metrics.'
          },
          interview: [
            {
              q: 'What is closure in JavaScript?',
              a: 'A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment), allowing an inner function to access scope definitions of its outer function even after it returns.'
            },
            {
              q: 'What is the event loop, and how does it handle microtasks?',
              a: 'The event loop checks the call stack. If empty, it first processes all microtasks (promises callbacks) in the microtask queue to completion, and then picks a macrotask (setTimeout, event callbacks) from the task queue.'
            }
          ],
          dependsOn: ['css'],
          resources: [
            { title: 'JavaScript.info Complete Guide (Link)', url: 'https://javascript.info/', type: 'link' },
            { title: 'ES6+ Features Cheat Sheet (Article)', url: 'https://www.freecodecamp.org/news/write-less-code-with-es6/', type: 'article' }
          ]
        }
      ]
    },
    {
      id: 'phase-2',
      title: '2. Professional Environment',
      description: 'Set up your workspace, version control systems, and package managers for active team collaboration.',
      nodes: [
        {
          id: 'git',
          label: 'Git & GitHub',
          importance: 'critical',
          description: 'Learn version control: tracking files, commits, branching, merging, merge conflicts, pull requests, and publishing code repositories to GitHub.',
          objectives: [
            'Configure Git user details, global settings, and set up SSH authentication.',
            'Perform local tracking actions: staging files, committing, and inspecting logs.',
            'Resolve merge conflicts, handle branch merges, push remote codes, and manage Pull Requests.'
          ],
          bestPractices: [
            'Write clear, descriptive commit messages starting with active action verbs (e.g. "feat: add user login").',
            'Always pull changes from the main server before starting branch merges.'
          ],
          mistakes: [
            'Committing node_modules or secret environment keys (.env) because of a missing .gitignore file.',
            'Force pushing (git push -f) directly to the main branch of shared repositories.'
          ],
          tips: 'Use git status constantly to inspect file tracking statuses before committing edits.',
          project: {
            name: 'Collaborative Open Source Project',
            desc: 'Fork a repository, create a features branch, write tests, commit, push, and submit a detailed pull request.'
          },
          interview: [
            {
              q: 'What is the difference between git merge and git rebase?',
              a: 'Merge creates a new commit joining two branches, preserving history exactly. Rebase moves/rewrites commits of one branch on top of another, creating a cleaner linear commit timeline.'
            },
            {
              q: 'How do you recover a commit that was deleted or overwritten?',
              a: 'Git maintains a reflog (reference log) tracking all head updates. Running git reflog prints the commit hash of deleted commits, which can be checked out or recovered.'
            }
          ],
          dependsOn: ['javascript'],
          resources: [
            { title: 'Git & GitHub Tutorial for Beginners (Video)', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video' },
            { title: 'Interactive Git Exercises (Link)', url: 'https://learngitbranching.js.org/', type: 'link' }
          ]
        },
        {
          id: 'package-managers',
          label: 'Package Managers (npm/pnpm)',
          importance: 'recommended',
          description: 'Understand how libraries are shared. Learn to use npm (Node Package Manager) and pnpm to install dependencies, run script tasks, and edit package.json.',
          objectives: [
            'Understand dependencies vs devDependencies in package.json.',
            'Utilize lockfiles (package-lock.json, pnpm-lock.yaml) to ensure consistent environment setups.',
            'Set up script commands to automate tests, builds, and dev server launches.'
          ],
          bestPractices: [
            'Always check dependency vulnerability warnings and run npm audit fix to patch threats.',
            'Prefer pnpm or yarn over npm in larger team projects for optimized disk space cache use.'
          ],
          mistakes: [
            'Deleting package-lock.json manually, which causes unexpected package version mismatches in production.',
            'Installing utility packages globally instead of locally, making environment setups hard to replicate.'
          ],
          tips: 'Use npx to run terminal packages without globally installing them on your computer.',
          project: {
            name: 'Dependency Configurator',
            desc: 'Initialize a new project using package managers, configuration scripts, and lockfiles to install and use packages.'
          },
          interview: [
            {
              q: 'What is the purpose of package-lock.json?',
              a: 'It locks down the exact version dependencies installed in node_modules, ensuring that dev, QA, and production environments install identical dependency trees.'
            },
            {
              q: 'What are devDependencies in package.json?',
              a: 'They are modules needed only during dev and testing (e.g. compilers, linters, test runner engines) and are omitted from production builds.'
            }
          ],
          dependsOn: ['git'],
          resources: [
            { title: 'What is npm? (Article)', url: 'https://www.w3schools.com/whatis/whatis_npm.asp', type: 'article' },
            { title: 'Why pnpm is fast (Article)', url: 'https://pnpm.io/motivation', type: 'article' }
          ]
        },
        {
          id: 'vite',
          label: 'Build Tools (Vite)',
          importance: 'critical',
          description: 'Modern build tooling. Learn how Vite packages files, transpiles code, uses Hot Module Replacement (HMR) for fast dev feedback, and compiles production bundles.',
          objectives: [
            'Configure Vite configs for React plugins, path aliases, and build directories.',
            'Explain how Vite utilizes native ES modules in dev mode for lightning fast start times.',
            'Compile production bundles and analyze build files.'
          ],
          bestPractices: [
            'Use Vite path alias configurations (e.g. @/components) to avoid messy relative path imports.',
            'Ensure asset directories are correctly referenced in vite.config.js for assets outputs.'
          ],
          mistakes: [
            'Over-complicating configs with redundant plugins instead of using core Vite assets features.',
            'Leaving development console logs and debugger lines in compiled production builds.'
          ],
          tips: 'Run vite preview locally to test how your production build behaves before publishing online.',
          project: {
            name: 'Speed-Optimized Scaffold',
            desc: 'Set up a custom React+Vite boilerplate with environment configs, absolute paths, and build scripts.'
          },
          interview: [
            {
              q: 'How does Vite achieve faster start times than Webpack?',
              a: 'Webpack bundles the entire application before starting the dev server. Vite handles source code using native ES modules, letting the browser compile modules on demand while using esbuild for fast dependencies pre-bundling.'
            },
            {
              q: 'What is Hot Module Replacement (HMR)?',
              a: 'HMR is a dev feature that injects updated code modules in the running browser on file saves, keeping the state intact without reloading the entire page.'
            }
          ],
          dependsOn: ['package-managers'],
          resources: [
            { title: 'Vite Getting Started Guide (Link)', url: 'https://vite.dev/guide/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'phase-3',
      title: '3. Frameworks & Component Architecture',
      description: 'Move from manual DOM rendering to component-driven development models.',
      nodes: [
        {
          id: 'react-fundamentals',
          label: 'React Core',
          importance: 'critical',
          description: 'Master JSX syntax, Functional Components, props, state management using useState, hook cycles like useEffect, rendering lists, and event handling.',
          objectives: [
            'Understand unidirectional data flow (parent -> child components).',
            'Master state vs props: changing reactive states vs read-only configurations.',
            'Manage hook cycles: useState, useEffect dependencies, and cleanup functions.'
          ],
          bestPractices: [
            'Keep component states local whenever possible. Only lift state up if components share datasets.',
            'Always return cleanup functions in useEffect hooks (e.g. clearing timers, cancelling fetches).'
          ],
          mistakes: [
            'Using array indexes as the key prop in map loops, which causes UI rendering bugs.',
            'Triggering infinite loops in useEffect by omitting dependency arrays.'
          ],
          tips: 'Install the React Developer Tools extension in your browser to debug props, states, and render histories.',
          project: {
            name: 'Interactive Recipe Organizer',
            desc: 'Build a modular recipe search app displaying categories, allowing recipe saves, ingredient checklists, and custom layout views.'
          },
          interview: [
            {
              q: 'What is the Virtual DOM, and how does React use it?',
              a: 'The Virtual DOM is a lightweight memory representation of the actual DOM. When state changes, React builds a new virtual representation, compares it with the old one (diffing), and batch-updates only the changed elements in the real DOM (reconciliation).'
            },
            {
              q: 'Why should you never mutate state directly in React?',
              a: 'React relies on reference equality checks to detect state changes. Mutating state directly bypasses setter hooks, meaning React does not detect changes and fails to trigger component re-renders.'
            }
          ],
          dependsOn: ['vite'],
          resources: [
            { title: 'React Official Documentation (Link)', url: 'https://react.dev/', type: 'link' },
            { title: 'React Full Beginner Course (Video)', url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0', type: 'video' }
          ]
        },
        {
          id: 'tailwind-css',
          label: 'Tailwind CSS',
          importance: 'recommended',
          description: 'A utility-first CSS framework. Learn utility classes, responsive prefixes, design token extensions, hover/focus state decorators, and config setups.',
          objectives: [
            'Build complex responsive layouts directly in HTML/JSX templates using utility classes.',
            'Extend tailwind.config.js to include custom fonts, color scales, animation keyframes, and container parameters.',
            'Optimize builds using modern PurgeCSS features to shake off unused class rules.'
          ],
          bestPractices: [
            'Use classnames or clsx libraries to cleanly format dynamic tailwind classes.',
            'Abstract repeated element classes into reusable React components rather than over-using @apply keywords.'
          ],
          mistakes: [
            'Writing massive inline classes that are unreadable instead of structuring layouts cleanly.',
            'Including absolute styles alongside Tailwind utilities, causing style collision bugs.'
          ],
          tips: 'Use Tailwind CSS IntelliSense in VS Code for autocomplete suggestions of utility classes.',
          project: {
            name: 'Saas Landing Page UI',
            desc: 'Re-create a premium SaaS landing page with dark/light transitions, grids, hero banners, and cards using Tailwind CSS.'
          },
          interview: [
            {
              q: 'What are the benefits of a utility-first CSS framework like Tailwind?',
              a: 'It speeds up development by avoiding custom CSS file management, enforces a consistent design system (colors, spacings, breakpoints), and reduces build sizes by compiling only used utility rules.'
            },
            {
              q: 'How does Tailwind handle responsive breakpoints?',
              a: 'Tailwind uses mobile-first media query prefixes (e.g. sm:, md:, lg:, xl:). Prefixing utility classes with md: means the style applies only on medium screens and larger.'
            }
          ],
          dependsOn: ['react-fundamentals'],
          resources: [
            { title: 'Tailwind CSS Official Docs (Link)', url: 'https://tailwindcss.com/', type: 'link' }
          ]
        },
        {
          id: 'state-management',
          label: 'State Management (Zustand)',
          importance: 'recommended',
          description: 'Manage complex global state. Learn React Context limitations, and how light state managers like Zustand offer clean, reactive store modules.',
          objectives: [
            'Understand React global state options: Context API, Redux Toolkit, and Zustand.',
            'Create Zustand store hooks with state variables and update action functions.',
            'Optimize state selectors to prevent unnecessary component re-renders.'
          ],
          bestPractices: [
            'Keep global stores focused. Split stores by domain (e.g. userAuthStore, shoppingCartStore).',
            'Use persist middleware in Zustand to save store state to localStorage automatically.'
          ],
          mistakes: [
            'Putting temporary UI states (like modal toggles) in global stores instead of keeping them in local useState hook blocks.',
            'Reading entire stores in components instead of using narrow selectors, causing unnecessary renders.'
          ],
          tips: 'Zustand stores can be updated outside React components, which is ideal for api interceptors.',
          project: {
            name: 'Modular E-commerce Checkout Flow',
            desc: 'Build a checkout system with a shopping cart, shipping inputs, discount counters, and price summaries synced via Zustand.'
          },
          interview: [
            {
              q: 'Why use Zustand instead of React Context API for global state?',
              a: 'Context triggers re-renders on all subscribing components whenever its value changes, requiring manual optimization. Zustand handles component updates via narrow state selectors, triggering re-renders only when chosen slices update.'
            },
            {
              q: 'What is a state selector, and why is it important?',
              a: 'A selector function (e.g. `useStore(state => state.count)`) extracts only the specific data a component needs. It prevents the component from re-rendering when other unrelated state values in the store update.'
            }
          ],
          dependsOn: ['react-fundamentals'],
          resources: [
            { title: 'Zustand GitHub & docs (Link)', url: 'https://github.com/pmndrs/zustand', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'phase-4',
      title: '4. Quality & Advanced Front-end',
      description: 'Strengthen layouts with typed safety, write automated tests, and ensure code correctness.',
      nodes: [
        {
          id: 'typescript',
          label: 'TypeScript',
          importance: 'critical',
          description: 'Static typing for JavaScript. Learn type interfaces, union types, type safety hooks, generics, and configuring tsconfig.json.',
          objectives: [
            'Define strict type interfaces, type aliases, and union types.',
            'Set up React component prop typings, event handler arguments, and state types.',
            'Implement Generics to build reusable typed functions and data stores.'
          ],
          bestPractices: [
            'Set "strict": true in tsconfig.json to catch potential runtime crashes during compilation.',
            'Avoid using the "any" type bypass. Use "unknown" if a type is undetermined.'
          ],
          mistakes: [
            'Over-typing simple variables that TypeScript can infer automatically.',
            'Ignoring type errors using @ts-ignore comments instead of typing code correctly.'
          ],
          tips: 'Use Utility Types like Pick, Omit, Partial, and Record to transform type definitions easily.',
          project: {
            name: 'Typed Task API Client',
            desc: 'Write an API client wrapper with generic fetch models, strict payload typing, and interface validations.'
          },
          interview: [
            {
              q: 'What is the difference between an interface and a type alias in TypeScript?',
              a: 'Interfaces are designed to describe object shapes and support declaration merging (appending properties). Type aliases can define unions, primitives, and intersections, making them highly versatile for advanced typings.'
            },
            {
              q: 'What are Generics, and why are they useful?',
              a: 'Generics allow you to write functions or classes where types are defined dynamically at invocation, offering flexibility while maintaining compile-time type safety.'
            }
          ],
          dependsOn: ['state-management'],
          resources: [
            { title: 'TypeScript Handbook (Link)', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'link' }
          ]
        },
        {
          id: 'testing',
          label: 'Testing (Vitest & Testing Library)',
          importance: 'recommended',
          description: 'Write test scripts. Learn Unit Testing with Vitest, mocking DOM rendering with React Testing Library, and core concepts of assertions.',
          objectives: [
            'Write assertions (expect) to verify business logic outputs.',
            'Mock REST API endpoints and user inputs (clicks, inputs) with userEvent triggers.',
            'Analyze Test Coverage logs to identify untested files.'
          ],
          bestPractices: [
            'Test behaviors (what the user sees) rather than implementation details (props/internal methods).',
            'Keep test scopes separate: mock network responses instead of hitting live database APIs.'
          ],
          mistakes: [
            'Writing tests that test too many features at once, making bugs hard to isolate.',
            'Omitting clean-ups after tests, causing mock state leakages across test files.'
          ],
          tips: 'Use screen.debug() in React Testing Library to print HTML DOM outputs in your test terminal.',
          project: {
            name: 'TDD Login Interface',
            desc: 'Create a Login component using Test-Driven Development (TDD): write validation tests, mock API routes, and implement form fields.'
          },
          interview: [
            {
              q: 'What is mock rendering, and why is MSW (Mock Service Worker) recommended?',
              a: 'Mock rendering mounts UI trees in a simulated DOM environment. MSW is recommended because it intercepts actual network calls at the browser/node layer, avoiding custom mock hacks and keeping API tests realistic.'
            },
            {
              q: 'Explain the difference between queryBy, getBy, and findBy selectors.',
              a: 'getBy throws an error immediately if an element is not found (use for synchronous components). queryBy returns null instead of throwing (use to assert element absences). findBy returns a promise and waits for elements (use for async rendering).'
            }
          ],
          dependsOn: ['typescript'],
          resources: [
            { title: 'Testing React Apps Guide (Article)', url: 'https://vitest.dev/guide/', type: 'article' }
          ]
        }
      ]
    },
    {
      id: 'phase-5',
      title: '5. Production Deployment & Servers',
      description: 'Optimize page loads, handle client/server routing, and host application servers.',
      nodes: [
        {
          id: 'nextjs',
          label: 'Next.js (React Framework)',
          importance: 'recommended',
          description: 'Server-Side Rendering (SSR), Static Site Generation (SSG), file-system App Router, layouts, API routes, and Server Components.',
          objectives: [
            'Explain the differences between React Server Components (RSC) and Client Components.',
            'Implement dynamic static pages using App Router directories.',
            'Optimize server rendering using layouts, Suspense placeholders, and server actions.'
          ],
          bestPractices: [
            'Keep data fetches close to their server layout trees. Fetch data directly in Server Components.',
            'Use standard Next.js Image components to optimize images.'
          ],
          mistakes: [
            'Declaring "use client" on every component, losing all server-side rendering benefits.',
            'Hitting internal API routes directly in Server Components, adding unnecessary network hops.'
          ],
          tips: 'Use dynamic routing (e.g. [id]/page.jsx) to serve parameterized pages dynamically.',
          project: {
            name: 'Full-Stack Portfolio Blog',
            desc: 'Build a Next.js blog with MDX content files, SSR lists, dynamically generated tags, and comments.'
          },
          interview: [
            {
              q: 'Explain the difference between Server Components and Client Components in Next.js.',
              a: 'Server Components render on the server, send pre-rendered HTML to the client, and exclude component files from the JS bundle. Client Components are compiled into bundle chunks, hydrated in the browser, and support hooks and event listeners.'
            },
            {
              q: 'What is Server-Side Rendering (SSR) vs Static Site Generation (SSG)?',
              a: 'SSR compiles pages dynamically in real-time on every incoming request. SSG builds page files ahead of time at build runtime, serving lightning-fast static pages via CDNs.'
            }
          ],
          dependsOn: ['typescript'],
          resources: [
            { title: 'Next.js Learning Course (Link)', url: 'https://nextjs.org/learn', type: 'link' }
          ]
        },
        {
          id: 'web-security',
          label: 'Web Security Basics',
          importance: 'critical',
          description: 'Learn standard browser security measures: HTTPS, Cross-Origin Resource Sharing (CORS), Content Security Policy (CSP), cookies, and token storage.',
          objectives: [
            'Prevent Cross-Site Scripting (XSS) by validating outputs and avoiding dangerous innerHTML injections.',
            'Configure CORS headers on servers to restrict api requests to authorized client domains.',
            'Manage user tokens securely using HTTP-only, secure, and SameSite cookies.'
          ],
          bestPractices: [
            'Implement Content Security Policies (CSP) to restrict scripts to verified domains.',
            'Validate and sanitize all user input values before printing them in the DOM.'
          ],
          mistakes: [
            'Storing sensitive authorization JWT keys in localStorage, making them vulnerable to XSS thefts.',
            'Disabling CORS checks using wildcard headers (Access-Control-Allow-Origin: *) in api servers.'
          ],
          tips: 'Use security scanners (like Helmet or Snyk) to check code files for vulnerabilities.',
          project: {
            name: 'Secure Token Auth Bridge',
            desc: 'Implement a proxy server that handles API authorization tokens and stores them in secure HTTP-only cookies.'
          },
          interview: [
            {
              q: 'What is Cross-Site Scripting (XSS), and how do you prevent it?',
              a: 'XSS occurs when attackers inject malicious scripts into trusted websites. Prevention requires sanitizing inputs, escaping output data, using secure frameworks (React escapes data automatically), and implementing strict CSP headers.'
            },
            {
              q: 'What is CSRF, and how do cookies protect against it?',
              a: 'Cross-Site Request Forgery (CSRF) tricks users into executing actions on websites they are authenticated on. Using SameSite=Strict/Lax cookie configurations prevents browsers from sending cookies with cross-site requests.'
            }
          ],
          dependsOn: ['nextjs'],
          resources: [
            { title: 'MDN Web Security (Link)', url: 'https://developer.mozilla.org/en-US/docs/Web/Security', type: 'link' }
          ]
        },
        {
          id: 'performance',
          label: 'Web Performance Optimization',
          importance: 'recommended',
          description: 'Optimize user experience. Learn Core Web Vitals (LCP, FID, CLS), lazy loading, bundle analysis, image scaling, and CDN content caching.',
          objectives: [
            'Analyze Core Web Vitals parameters using Chrome Lighthouse profiles.',
            'Implement React.lazy and dynamic imports to split component code bundles.',
            'Optimize resource loads using image compressions, aspect-ratio declarations, and browser caching.'
          ],
          bestPractices: [
            'Always set width and height properties on images to reserve layout space and prevent Cumulative Layout Shift (CLS).',
            'Load heavy third-party marketing tags asynchronously to avoid blocking the main thread.'
          ],
          mistakes: [
            'Loading massive, unoptimized high-res images directly, destroying mobile performance scores.',
            'Using large npm packages for simple tasks instead of using native JavaScript solutions.'
          ],
          tips: 'Install rollup-plugin-visualizer to inspect bundle layouts and find heavy dependency modules.',
          project: {
            name: 'Lighthouse Scoring Review',
            desc: 'Optimize a slow portfolio page, improving its Mobile performance score from below 50 to above 90.'
          },
          interview: [
            {
              q: 'What are the three Core Web Vitals, and what do they measure?',
              a: 'Largest Contentful Paint (LCP) measures loading speed (target < 2.5s). Interaction to Next Paint (INP) / First Input Delay (FID) measures page responsiveness (target < 200ms). Cumulative Layout Shift (CLS) measures visual layout stability (target < 0.1).'
            },
            {
              q: 'What is code splitting, and how is it implemented in React?',
              a: 'Code splitting breaks down code bundles into smaller chunks loaded on demand. In React, it is implemented using lazy load hooks (`React.lazy(() => import("./Component"))`) combined with `Suspense` loaders.'
            }
          ],
          dependsOn: ['web-security'],
          resources: [
            { title: 'Google Web Dev: Performance (Link)', url: 'https://web.dev/performance-scoring/', type: 'link' }
          ]
        },
        {
          id: 'deployment',
          label: 'Deployment (Vercel/Netlify)',
          importance: 'critical',
          description: 'Deploy code to users. Setup Continuous Integration (CI/CD) pipelines from GitHub, manage domain configurations, SSL, and server redirects.',
          objectives: [
            'Configure automatic git branch triggers (staging, production) in Vercel/Netlify pipelines.',
            'Manage build environment variables securely between development and production workspaces.',
            'Configure custom domain names, SSL configurations, and HTTP redirect rules.'
          ],
          bestPractices: [
            'Store all API secrets in build environment configurations rather than hardcoding them in code.',
            'Always check test suites in pre-build steps to block broken codes from deploying.'
          ],
          mistakes: [
            'Deploying development test files or test keys to production env slots.',
            'Ignoring build output warning logs during pipeline compilations.'
          ],
          tips: 'Implement a health-check endpoint on server builds to verify cluster deployments before routing user traffic.',
          project: {
            name: 'Automated CI/CD Pipeline',
            desc: 'Deploy a web application with staging previews, production merge runs, and automatic rollbacks on build failures.'
          },
          interview: [
            {
              q: 'What is CI/CD, and why is it important in frontend development?',
              a: 'Continuous Integration (CI) automates merging and testing code. Continuous Delivery (CD) automates deploying code changes to staging/production. It ensures fast, reliable releases and prevents manual deploy errors.'
            },
            {
              q: 'How do you handle environment variables in a build pipeline?',
              a: 'Environment variables are set in the hosting provider dashboard. During compilation, Vite/Next.js injects these variables (e.g. `VITE_API_URL`) into the bundle, ensuring values change securely across environments.'
            }
          ],
          dependsOn: ['performance'],
          resources: [
            { title: 'Deploying a React App (Article)', url: 'https://vercel.com/docs/frameworks/react', type: 'article' }
          ]
        }
      ]
    }
  ]
};
