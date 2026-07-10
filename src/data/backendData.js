export const backendData = {
  id: 'backend',
  title: 'Backend Developer',
  description: 'A comprehensive, step-by-step roadmap to master server-side engineering: backend programming, system architecture, database design, API security, and scalability.',
  category: 'role',
  icon: 'Server',
  stats: {
    duration: '8-12 months',
    difficulty: 'Advanced',
    topics: 18
  },
  phases: [
    {
      id: 'backend-phase-1',
      title: '1. Programming Languages & CLI',
      description: 'Choose a primary programming language for server logic, and learn the command line.',
      nodes: [
        {
          id: 'cli-terminal',
          label: 'CLI & Terminal Basics',
          importance: 'critical',
          description: 'Master standard terminal tasks: navigating folders, manipulating files, editing configurations, and basic bash scripting.',
          objectives: [
            'Master shell commands (cd, ls, mkdir, rm, cp, mv, grep, find).',
            'Manage file permissions (chmod, chown) and processes (ps, kill).',
            'Write basic automation shell scripts using bash syntax.'
          ],
          bestPractices: [
            'Use standard SSH key pairs instead of password-based logins for remote servers.',
            'Keep aliases configured in .bashrc/.zshrc for frequent command shortcuts.'
          ],
          mistakes: [
            'Executing recursive delete commands (rm -rf) with wildcard roots.',
            'Running general scripts as the root superuser instead of utilizing sudo.'
          ],
          tips: 'Install a terminal utility like htop to inspect CPU and RAM usage in real-time.',
          project: {
            name: 'Logs Auto-Archiver',
            desc: 'Write a shell script that scans a folder for logs, compresses files older than 7 days, and stores them in a backup folder.'
          },
          interview: [
            {
              q: 'What does the chmod 755 command do?',
              a: 'It sets file permissions: 7 (read, write, execute) for the file owner, and 5 (read, execute) for both group owners and other general users.'
            },
            {
              q: 'Explain the difference between stdout, stdin, and stderr.',
              a: 'stdin (file descriptor 0) is input sent to a program. stdout (descriptor 1) receives standard program outputs. stderr (descriptor 2) receives diagnostic error messages.'
            }
          ],
          resources: [
            { title: 'Linux Command Line Tutorial (Video)', url: 'https://www.youtube.com/watch?v=wBp0Rb-ZJak', type: 'video' }
          ]
        },
        {
          id: 'nodejs',
          label: 'Node.js (JavaScript/TS)',
          importance: 'critical',
          description: 'Run JavaScript on the server. Focus on asynchronous programming, event loop mechanics, module systems (CommonJS/ES Modules), NPM packages, and file systems.',
          objectives: [
            'Understand Node.js asynchronous event loop execution.',
            'Work with built-in modules (fs, path, http, crypto).',
            'Manage ES Modules (import/export) and CommonJS (require/exports).'
          ],
          bestPractices: [
            'Always use asynchronous fs methods (fs.promises) to avoid blocking the main execution thread.',
            'Implement error event handlers on all streams to prevent application crashes.'
          ],
          mistakes: [
            'Performing heavy CPU computations (like cryptography) on the main thread, causing server lags.',
            'Assuming Node.js runs multithreaded by default like Java or C#.'
          ],
          tips: 'Use the node --watch flag in modern Node versions to auto-reload files on saves.',
          project: {
            name: 'File System Sync Agent',
            desc: 'Build a directory scanner that watches a folder, hashes new files, and logs names in JSON records.'
          },
          interview: [
            {
              q: 'How does Node.js handle concurrency if it is single-threaded?',
              a: 'Node.js uses an Event Loop to handle non-blocking asynchronous operations. While Javascript runs on a single thread, Node delegates operations (I/O, database) to the OS kernel or thread pools (libuv), notifying the thread via callbacks.'
            },
            {
              q: 'What is the purpose of package-lock.json in Node projects?',
              a: 'It records the exact versions of dependencies installed, guaranteeing that developers and servers build identical environment dependency trees.'
            }
          ],
          dependsOn: ['cli-terminal'],
          resources: [
            { title: 'Node.js Full Course (Video)', url: 'https://www.youtube.com/watch?v=f2EqECiOLO8', type: 'video' }
          ]
        }
      ]
    },
    {
      id: 'backend-phase-2',
      title: '2. Databases & Storage',
      description: 'Learn where and how to store dynamic application data.',
      nodes: [
        {
          id: 'relational-db',
          label: 'Relational Databases (PostgreSQL)',
          importance: 'critical',
          description: 'Understand tabular structures. Learn SQL queries, relational schemas, primary/foreign keys, joins, index optimizations, and ACID transactions.',
          objectives: [
            'Design normalized relational tables (1NF, 2NF, 3NF).',
            'Write complex SQL queries combining JOINs, aggregations, and subqueries.',
            'Optimize database searches using Indexes and explain execution plans.'
          ],
          bestPractices: [
            'Always use parameterized inputs in queries to block SQL Injection attacks.',
            'Establish connection pools instead of opening new database connections on every request.'
          ],
          mistakes: [
            'Creating indexes on columns that are rarely queried but frequently updated, slowing down writes.',
            'Underestimating transaction isolation levels, causing database dirty reads.'
          ],
          tips: 'Use EXPLAIN ANALYZE on SQL queries to identify slow database query tables.',
          project: {
            name: 'Normalized Store Database Schema',
            desc: 'Design a PostgreSQL database schema for an online shop, defining relationships, constraints, and indexes.'
          },
          interview: [
            {
              q: 'What are ACID properties in database engines?',
              a: 'ACID stands for Atomicity (all actions in a transaction succeed or all fail), Consistency (data matches constraints), Isolation (concurrent runs do not clash), and Durability (saved transactions persist during server crashes).'
            },
            {
              q: 'Explain the difference between a clustered and non-clustered index.',
              a: 'A clustered index determines the physical order of data rows on disk (only one allowed, usually the primary key). A non-clustered index creates a separate search tree pointing to the physical rows.'
            }
          ],
          dependsOn: ['nodejs'],
          resources: [
            { title: 'PostgreSQL Tutorial (Video)', url: 'https://www.youtube.com/watch?v=SpfIwlAYaKk', type: 'video' }
          ]
        },
        {
          id: 'nosql-db',
          label: 'NoSQL Databases (MongoDB)',
          importance: 'recommended',
          description: 'Document databases for flexible schemas. Learn collections, document indexing, aggregation queries, and scaling use-cases.',
          objectives: [
            'Design flexible document models and nested schemas.',
            'Perform aggregation pipeline queries (match, group, project, sort).',
            'Explain NoSQL scaling mechanisms (sharding, replication).'
          ],
          bestPractices: [
            'Embed child documents if they are small and accessed together, otherwise reference them.',
            'Keep document sizes below MongoDB limits (16MB).'
          ],
          mistakes: [
            'Using MongoDB when data requires strict relational joins, causing slow code joins.',
            'Omitting query indexes, resulting in slow full-collection scans.'
          ],
          tips: 'Use Mongoose schemas in Node to validate fields before documents are written.',
          project: {
            name: 'Social Feed Database Model',
            desc: 'Design a document database structure for a social feed, using nesting for comments and references for user credentials.'
          },
          interview: [
            {
              q: 'What is CAP Theorem, and how does it relate to NoSQL?',
              a: 'CAP Theorem states that a distributed data system can guarantee only two out of three qualities: Consistency (all nodes see identical data), Availability (nodes return responses), and Partition Tolerance (system functions during network drops). NoSQL databases choose between AP or CP.'
            },
            {
              q: 'When should you choose PostgreSQL over MongoDB?',
              a: 'Choose PostgreSQL if data is relational, requires strict schemas, absolute ACID compliance (financial records), and complex joins. Choose MongoDB for rapid prototyping, unstructured log streams, and high write volumes.'
            }
          ],
          dependsOn: ['nodejs'],
          resources: [
            { title: 'MongoDB Crash Course (Video)', url: 'https://www.youtube.com/watch?v=ofme2o290d4', type: 'video' }
          ]
        }
      ]
    },
    {
      id: 'backend-phase-3',
      title: '3. API Design & Web Servers',
      description: 'Learn to build HTTP endpoints to exchange data between clients and backend servers.',
      nodes: [
        {
          id: 'rest-apis',
          label: 'REST APIs & Express',
          importance: 'critical',
          description: 'Define routes, process request query parameters/body objects, return status codes, and write request/response middlewares.',
          objectives: [
            'Write clean controllers handling Express GET, POST, PUT, DELETE requests.',
            'Structure HTTP responses with standardized status codes (200, 201, 400, 401, 403, 404, 500).',
            'Build custom error handling middlewares to catch errors globally.'
          ],
          bestPractices: [
            'Use nouns for API endpoints (e.g. /api/users) instead of verbs (/api/getUser).',
            'Implement Joi or Zod schemas to validate request body fields before running business logic.'
          ],
          mistakes: [
            'Returning raw database stack trace error strings to API users, exposing server details.',
            'Omitting route rate-limiters, leaving servers vulnerable to denial-of-service (DoS) crashes.'
          ],
          tips: 'Use the express-async-handler module to cleanly forward errors from async controllers to error handlers.',
          project: {
            name: 'RESTful E-Commerce Server',
            desc: 'Build an Express API server managing products, checking stock, handling order payloads, and using global error handlers.'
          },
          interview: [
            {
              q: 'What is idempotent execution in API endpoints?',
              a: 'An endpoint is idempotent if executing it multiple times yields identical results. GET, PUT, and DELETE are idempotent. POST is not, as running it twice creates two resources.'
            },
            {
              q: 'What is the purpose of CORS headers, and how do you configure them?',
              a: 'Cross-Origin Resource Sharing (CORS) is a browser security feature. The server configures origin headers (Access-Control-Allow-Origin) to authorize specific client domains to access API resources.'
            }
          ],
          dependsOn: ['relational-db'],
          resources: [
            { title: 'Express.js Crash Course (Video)', url: 'https://www.youtube.com/watch?v=SccSCuHhOw0', type: 'video' }
          ]
        }
      ]
    }
  ]
};
