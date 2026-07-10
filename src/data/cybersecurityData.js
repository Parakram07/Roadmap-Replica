export const cybersecurityData = {
  id: 'cybersecurity',
  title: 'Cybersecurity Engineer',
  description: 'Master system defenses. Audit application codes, secure network subnets, implement cryptography protocols, and configure firewalls.',
  category: 'role',
  icon: 'Shield',
  stats: {
    duration: '10-12 months',
    difficulty: 'Expert',
    topics: 9
  },
  phases: [
    {
      id: 'sec-phase-1',
      title: '1. Networking Foundations',
      description: 'Understand packet structures, port routing, and traffic filters.',
      nodes: [
        {
          id: 'networking-sec',
          label: 'IP Routing & Firewalls',
          importance: 'critical',
          description: 'Learn subnet splits, port bindings, firewall rules (iptables/UFW), and diagnosing logs (Wireshark).',
          objectives: [
            'Explain TCP/IP packet structures and port scopes.',
            'Establish firewall configurations block-listing malicious IPs.',
            'Inspect network dumps to debug headers.'
          ],
          bestPractices: [
            'Keep public ports closed; route traffic via secure proxy engines.',
            'Audit network rules regularly.'
          ],
          mistakes: [
            'Exposing open database ports (like 5432) to wildcard public access (0.0.0.0).'
          ],
          tips: 'Use the ss and netstat commands to monitor active port listeners.',
          project: {
            name: 'Network Traffic Auditor',
            desc: 'Scan open VM ports using commands and construct firewall filter boundaries.'
          },
          interview: [
            {
              q: 'What is a firewall, and how does it block traffic?',
              a: 'A firewall is a network security system that monitors and filters incoming and outgoing traffic based on pre-defined security rules, blocking packets on specific ports or IPs.'
            }
          ],
          resources: [
            { title: 'Wireshark packet analysis (Link)', url: 'https://www.wireshark.org/', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'sec-phase-2',
      title: '2. Cryptography Systems',
      description: 'Secure file contents and client-server traffic channels.',
      nodes: [
        {
          id: 'cryptography',
          label: 'Symmetric & Asymmetric Ciphers',
          importance: 'critical',
          description: 'Implement encryption algorithms: AES keys, RSA keypairs, Diffie-Hellman protocols, and HTTPS handshakes.',
          objectives: [
            'Explain differences between AES (symmetric) and RSA (asymmetric) ciphers.',
            'Generate SSH key pairs securely.',
            'Implement token signature verifications.'
          ],
          bestPractices: [
            'Avoid custom crypto libraries; use standard, vetted packages like bcrypt.',
            'Update public keys regularly.'
          ],
          mistakes: [
            'Hardcoding secret keys or credentials inside client repository files.'
          ],
          tips: 'Use openssl command-line tools to generate and verify certificate chains.',
          project: {
            name: 'Local Credentials Vault',
            desc: 'Build a script that encrypts configuration values using AES-256 and decrypts payloads on runtime verification.'
          },
          interview: [
            {
              q: 'What is the main difference between symmetric and asymmetric encryption?',
              a: 'Symmetric uses a single shared key for both encryption and decryption. Asymmetric uses a mathematically linked key pair: a public key for encryption and a private key for decryption.'
            }
          ],
          dependsOn: ['networking-sec'],
          resources: [
            { title: 'Cloudflare Cryptography Basics (Link)', url: 'https://www.cloudflare.com/learning/ssl/what-is-ssl/', type: 'link' }
          ]
        }
      ]
    }
  ]
};
