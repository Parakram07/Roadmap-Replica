export const fullstackData = {
  id: 'fullstack',
  title: 'Full-Stack Developer',
  description: 'Master both frontend user interfaces and backend database engines: connect layouts, route APIs, manage sessions, and coordinate deployments.',
  category: 'role',
  icon: 'Layers',
  stats: {
    duration: '9-12 months',
    difficulty: 'Advanced',
    topics: 12
  },
  phases: [
    {
      id: 'fs-phase-1',
      title: '1. Shared Web Foundations',
      description: 'Master browser-server communication models and team coordination tools.',
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
            }
          ],
          resources: [
            { title: 'How the Internet Works (Video)', url: 'https://www.youtube.com/watch?v=7_LPdttKXPc', type: 'video' }
          ]
        },
        {
          id: 'git',
          label: 'Git Version Control',
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
            }
          ],
          dependsOn: ['internet'],
          resources: [
            { title: 'Git & GitHub Tutorial for Beginners (Video)', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video' }
          ]
        }
      ]
    },
    {
      id: 'fs-phase-2',
      title: '2. Client Frontend Systems',
      description: 'Build interactive user layouts and manage client data flow.',
      nodes: [
        {
          id: 'html-css-js',
          label: 'HTML, CSS & Modern JS',
          importance: 'critical',
          description: 'Master building semantic DOM document elements, applying custom styling layouts (Flexbox/Grid), and executing asynchronous ES6+ Javascript actions.',
          objectives: [
            'Write semantic, search-optimized HTML layouts.',
            'Establish responsive CSS selectors using grid models.',
            'Handle asynchronous callbacks using promises and fetch APIs.'
          ],
          bestPractices: [
            'Avoid var; declare variables using const by default.',
            'Ensure contrast and accessibility guidelines are met.'
          ],
          mistakes: [
            'Using absolute pixel containers instead of responsive percentages/viewport widths.'
          ],
          tips: 'Inspect DOM layout shifts using chrome lighthouse tools.',
          project: {
            name: 'Responsive Profile Hub',
            desc: 'Build an interactive web profile that pulls background metrics from open APIs asynchronously.'
          },
          interview: [
            {
              q: 'Explain the difference between let and const in ES6.',
              a: 'let allows block-scoped variables to be re-assigned. const creates read-only references that cannot be re-assigned (though object properties can still be mutated).'
            }
          ],
          dependsOn: ['git'],
          resources: [
            { title: 'JavaScript.info Guide (Link)', url: 'https://javascript.info/', type: 'link' }
          ]
        },
        {
          id: 'react-fundamentals',
          label: 'React Core',
          importance: 'critical',
          description: 'Master JSX syntax, Functional Components, props, state management using useState, hook cycles like useEffect, rendering lists, and event handling.',
          objectives: [
            'Understand unidirectional data flow.',
            'Manage local component reactivity using useState hooks.',
            'Synchronize side effects inside useEffect functions.'
          ],
          bestPractices: [
            'Keep component folders organized by feature slices.',
            'Clean up listeners and fetch abort controllers inside useEffect returns.'
          ],
          mistakes: [
            'Omitting keys in map loops, causing rendering errors.'
          ],
          tips: 'Use React Developer Tools browser plugin to audit rendering performance.',
          project: {
            name: 'Modular Recipe Catalog',
            desc: 'Design a dashboard listing food categories, checking off ingredients, and storing reviews.'
          },
          interview: [
            {
              q: 'What is the purpose of the key prop in React lists?',
              a: 'It helps React identify which items have changed, been added, or been removed, ensuring stable DOM reconciliation rather than re-rendering the entire list.'
            }
          ],
          dependsOn: ['html-css-js'],
          resources: [
            { title: 'Official React Docs (Link)', url: 'https://react.dev/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'fs-phase-3',
      title: '3. Server Backend & APIs',
      description: 'Configure server routing, query databases, and secure sessions.',
      nodes: [
        {
          id: 'nodejs',
          label: 'Node.js & Web Servers',
          importance: 'critical',
          description: 'Run JavaScript on the server. Focus on asynchronous programming, event loop mechanics, module systems (CommonJS/ES Modules), NPM packages, and file systems.',
          objectives: [
            'Configure express controllers managing client payloads.',
            'Write custom middlewares to validate requests.',
            'Establish global exception filters.'
          ],
          bestPractices: [
            'Sanitize inputs using libraries like Zod.',
            'Keep controllers thin; delegate logic to service modules.'
          ],
          mistakes: [
            'Leaving debugging console logs inside production codebases.'
          ],
          tips: 'Use the node --watch flag to auto-reload files during updates.',
          project: {
            name: 'REST Store API Server',
            desc: 'Implement a server handling requests, modifying stock values, and throwing valid HTTP exceptions.'
          },
          interview: [
            {
              q: 'How does Node.js handle concurrency?',
              a: 'It utilizes an Event Loop to offload I/O operations (like database searches or file reads) to thread pools, keeping the main Javascript execution thread free.'
            }
          ],
          dependsOn: ['react-fundamentals'],
          resources: [
            { title: 'Node.js Full Course (Video)', url: 'https://www.youtube.com/watch?v=f2EqECiOLO8', type: 'video' }
          ]
        },
        {
          id: 'relational-db',
          label: 'PostgreSQL Relational DB',
          importance: 'critical',
          description: 'Understand tabular structures. Learn SQL queries, relational schemas, primary/foreign keys, joins, index optimizations, and ACID transactions.',
          objectives: [
            'Design normalized relational schemas with foreign keys.',
            'Perform queries utilizing multiple table JOINs.',
            'Establish database indexing for optimized searches.'
          ],
          bestPractices: [
            'Avoid raw SQL strings; always parameterized query arguments to avoid SQL Injection.',
            'Maintain migrations to track database updates.'
          ],
          mistakes: [
            'Creating excessive index arrays on frequently modified columns.'
          ],
          tips: 'Verify database performance plans using EXPLAIN commands.',
          project: {
            name: 'Relational Store Schema',
            desc: 'Map out tables, constraints, and mock datasets for a relational store database.'
          },
          interview: [
            {
              q: 'Explain the difference between inner join and left join.',
              a: 'Inner Join returns records that have matching values in both tables. Left Join returns all records from the left table, and matching records from the right table, filling nulls if no match exists.'
            }
          ],
          dependsOn: ['nodejs'],
          resources: [
            { title: 'PostgreSQL Tutorial (Video)', url: 'https://www.youtube.com/watch?v=SpfIwlAYaKk', type: 'video' }
          ]
        }
      ]
    }
  ]
};
