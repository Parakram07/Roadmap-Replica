export const dockerData = {
  id: 'docker',
  title: 'Docker & Containers',
  description: 'Master containerization: package application codes, define dockerfile stages, manage container volumes, and compile docker-compose configurations.',
  category: 'skill',
  icon: 'Box',
  stats: {
    duration: '2-3 weeks',
    difficulty: 'Intermediate',
    topics: 6
  },
  phases: [
    {
      id: 'doc-phase-1',
      title: '1. Container Isolation & Images',
      description: 'Learn container virtualization and write instructions for custom images.',
      nodes: [
        {
          id: 'dockerfiles',
          label: 'Dockerfile Instructions',
          importance: 'critical',
          description: 'Learn key directives: FROM, RUN, COPY, CMD, ENTRYPOINT, EXPOSE, and multi-stage build configurations.',
          objectives: [
            'Differentiate between container isolation and virtual machine virtualization.',
            'Write clean Dockerfiles to package React/Node apps.',
            'Implement multi-stage builds to optimize image sizes.'
          ],
          bestPractices: [
            'Use specific base image tags (e.g. node:20-alpine) instead of generic "latest" tags.',
            'Order Dockerfile instructions from least-frequent to most-frequent changes to maximize layer caching.'
          ],
          mistakes: [
            'Running container processes as the root user instead of configuring dedicated service users.'
          ],
          tips: 'Add a .dockerignore file to exclude node_modules or local build files from being copied into the container.',
          project: {
            name: 'Optimized React Container Image',
            desc: 'Write a multi-stage Dockerfile that compiles a React app and serves static assets using an Nginx alpine image.'
          },
          interview: [
            {
              q: 'What is the difference between CMD and ENTRYPOINT in a Dockerfile?',
              a: 'ENTRYPOINT defines the default executable command run when the container starts and cannot be easily overridden. CMD sets default arguments for the ENTRYPOINT, which can be easily overridden in the CLI.'
            }
          ],
          resources: [
            { title: 'Docker Official Reference (Link)', url: 'https://docs.docker.com/engine/reference/builder/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'doc-phase-2',
      title: '2. Multi-Container Pipelines',
      description: 'Coordinate multiple containers and persist data.',
      nodes: [
        {
          id: 'docker-compose',
          label: 'Docker Compose Configs',
          importance: 'critical',
          description: 'Define multiple services in a single yaml file, manage volume mounts, and set up network bridges.',
          objectives: [
            'Write docker-compose.yml files orchestrating web apps and databases.',
            'Persist database records using named Docker volumes.',
            'Isolate container communications using network bridges.'
          ],
          bestPractices: [
            'Use environment variables inside compose files to manage secret keys.',
            'Specify dependency ordering using the depends_on condition.'
          ],
          mistakes: [
            'Omitting volumes for database containers, resulting in data loss when containers restart.'
          ],
          tips: 'Run docker compose down -v to stop containers and delete associated local volumes.',
          project: {
            name: 'Full-Stack Compose Pipeline',
            desc: 'Create a docker-compose file that links an Express API service, a PostgreSQL database volume, and a React frontend.'
          },
          interview: [
            {
              q: 'What is a Docker Volume, and why is it important?',
              a: 'A Volume is a directory on the host machine managed by Docker that is mounted inside a container. It is important because container file systems are ephemeral; volumes persist data across container restarts and updates.'
            }
          ],
          dependsOn: ['dockerfiles'],
          resources: [
            { title: 'Docker Compose Docs (Link)', url: 'https://docs.docker.com/compose/', type: 'link' }
          ]
        }
      ]
    }
  ]
};
