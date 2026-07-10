export const devopsData = {
  id: 'devops',
  title: 'DevOps Engineer',
  description: 'A comprehensive, step-by-step roadmap to master infrastructure, continuous integration, container orchestration, cloud hosting, and automation.',
  category: 'role',
  icon: 'GitBranch',
  stats: {
    duration: '10-14 months',
    difficulty: 'Expert',
    topics: 16
  },
  phases: [
    {
      id: 'devops-phase-1',
      title: '1. Linux Operating System & Scripting',
      description: 'Master the operating system foundation of almost all servers.',
      nodes: [
        {
          id: 'linux-admin',
          label: 'Linux Administration',
          importance: 'critical',
          description: 'Learn file system permissions, user groups, systemctl service controls, network configurations (ifconfig/ip), and process management (top, htop, ps).',
          objectives: [
            'Manage file permissions and ownership (chmod, chown).',
            'Control system background services (systemctl start/stop/status).',
            'Debug resource usage using top, htop, free, and df commands.'
          ],
          bestPractices: [
            'Never log in directly as root superuser. Configure a separate user account and run commands using sudo.',
            'Maintain regular backups of configuration files inside /etc/ before updating.'
          ],
          mistakes: [
            'Misconfiguring firewall permissions (iptables/ufw), exposing open ports.',
            'Killing parent processes without understanding sub-thread structures.'
          ],
          tips: 'Use systemd journalctl to inspect service logs during boot crashes.',
          project: {
            name: 'Secure System Node Config',
            desc: 'Configure a Linux server VM, setup local firewalls (UFW), add user limits, and run status monitors.'
          },
          interview: [
            {
              q: 'What is the purpose of systemd in modern Linux?',
              a: 'systemd is the standard initialization system and service manager that bootstraps user space processes and maintains active background daemons in Linux.'
            },
            {
              q: 'Explain the difference between soft links and hard links.',
              a: 'A hard link points to the exact physical data sector (inode) on disk, and exists even if the original name is deleted. A soft link (symlink) is a pointer file that references the file name path, and breaks if the original file is removed.'
            }
          ],
          resources: [
            { title: 'Linux Administration Bootcamp (Video)', url: 'https://www.youtube.com/watch?v=s3w2y8B65qQ', type: 'video' }
          ]
        }
      ]
    }
  ]
};
