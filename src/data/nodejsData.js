export const nodejsData = {
  id: 'nodejs',
  title: 'Node.js Developer',
  description: 'Deep dive into server-side JavaScript: master event loops, asynchronous streams, child processes, REST frameworks, and JWT authorization mechanisms.',
  category: 'skill',
  icon: 'Cpu',
  stats: {
    duration: '3-4 months',
    difficulty: 'Intermediate',
    topics: 8
  },
  phases: [
    {
      id: 'node-phase-1',
      title: '1. Node.js Core Architecture',
      description: 'Master the internal engine architecture and asynchronous APIs.',
      nodes: [
        {
          id: 'event-loop',
          label: 'The Event Loop & Libuv',
          importance: 'critical',
          description: 'Learn how Node.js manages execution states, call stacks, microtask/macrotask queues, and thread pools.',
          objectives: [
            'Explain the stages of the Event Loop: timers, poll, check, close.',
            'Differentiate between microtasks (Promises, process.nextTick) and macrotasks (setTimeout, setImmediate).',
            'Understand how libuv manages thread pools for system tasks.'
          ],
          bestPractices: [
            'Avoid writing CPU-intensive blocking code on the main thread.',
            'Use setImmediate over setTimeout(..., 0) for executing callbacks after I/O cycles.'
          ],
          mistakes: [
            'Blocking the event loop with synchronous operations like fs.readFileSync in high-traffic APIs.'
          ],
          tips: 'Use process.nextTick to execute callbacks immediately before the next Event Loop phase.',
          project: {
            name: 'Asynchronous Event Pipeline',
            desc: 'Write a program that registers timers, resolves promises, and logs output to trace the exact order of execution phases.'
          },
          interview: [
            {
              q: 'Is Node.js completely single-threaded?',
              a: 'The JavaScript execution thread is single-threaded, but system operations (like cryptography, compression, or file I/O) are offloaded to OS threads or libuv\'s thread pool (default size 4).'
            }
          ],
          resources: [
            { title: 'Node.js Event Loop Guide (Link)', url: 'https://nodejs.org/en/guides/event-loop-timers-and-nexttick/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'node-phase-2',
      title: '2. Backend APIs & Servers',
      description: 'Build web servers and handle API communication.',
      nodes: [
        {
          id: 'express-servers',
          label: 'Express API Development',
          importance: 'critical',
          description: 'Learn to design routing structures, handle request bodies, configure status codes, and write custom middlewares.',
          objectives: [
            'Write clean controllers for Express HTTP methods.',
            'Implement request validation schemas using libraries like Zod.',
            'Create global error handling middlewares.'
          ],
          bestPractices: [
            'Keep routing, controllers, and services structured in separate layers.',
            'Use standard HTTP status codes consistently.'
          ],
          mistakes: [
            'Returning raw stack trace error strings to users, exposing server details.'
          ],
          tips: 'Use the express-async-handler utility to cleanly pass controller errors to error middleware.',
          project: {
            name: 'Secure Task Server API',
            desc: 'Build an Express API managing projects, utilizing validation schemas and global error handlers.'
          },
          interview: [
            {
              q: 'What is Express middleware?',
              a: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function (next) in the application\'s request-response cycle.'
            }
          ],
          dependsOn: ['event-loop'],
          resources: [
            { title: 'Express Official Guide (Link)', url: 'https://expressjs.com/', type: 'link' }
          ]
        }
      ]
    }
  ]
};
