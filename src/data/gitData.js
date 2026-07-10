export const gitData = {
  id: 'git',
  title: 'Git & GitHub',
  description: 'Master version control operations, collaborate on projects through pull requests, configure remote branches, and resolve complex conflicts.',
  category: 'skill',
  icon: 'GitPullRequest',
  stats: {
    duration: '1-2 weeks',
    difficulty: 'Beginner',
    topics: 8
  },
  phases: [
    {
      id: 'git-phase-1',
      title: '1. Foundations',
      description: 'Configure and initialize Git on your computer.',
      nodes: [
        {
          id: 'vcs-intro',
          label: 'What is Version Control?',
          importance: 'critical',
          description: 'Learn the difference between centralized and distributed version control, and how Git records historical revisions of your files.',
          objectives: [
            'Explain the benefits of distributed version control over centralized models.',
            'Understand how Git records state using commit snapshots.',
            'Explain the concept of local vs remote repository databases.'
          ],
          bestPractices: [
            'Configure Git variables globally (user.name and user.email) before making commits.',
            'Exclude dependency and credential files from tracking using a global gitignore.'
          ],
          mistakes: [
            'Using Git as a backup drive by uploading large binary media assets.',
            'Confusing Git (the tool) with GitHub (the hosting service).'
          ],
          tips: 'Use git config --list to review active config configurations.',
          project: {
            name: 'Local Repository Scaffold',
            desc: 'Initialize a new repository locally, define tracking rules, and check details in git logs.'
          },
          interview: [
            {
              q: 'What is the main difference between CVCS and DVCS?',
              a: 'Centralized VCS (like SVN) hosts code history on a single central server, requiring a network connection for basic log tasks. Distributed VCS (like Git) clones the full repository database to every machine, allowing offline commits and logs.'
            },
            {
              q: 'What is the purpose of the .git folder?',
              a: 'The .git folder contains the entire repository history, commits, refs, configurations, object databases, and index structures.'
            }
          ],
          resources: [
            { title: 'Git in 100 Seconds (Video)', url: 'https://www.youtube.com/watch?v=hwP7WQkmECE', type: 'video' }
          ]
        }
      ]
    }
  ]
};
