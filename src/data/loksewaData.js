export const loksewaData = {
  id: 'loksewa',
  title: 'Lok Sewa Officer',
  description: 'Complete preparation roadmap for Section Officer (Sakha Adhikrit) & Nayab Subba civil service exams in Nepal. Master General Knowledge, IQ, Governance, and Contemporary Issues.',
  category: 'sarkari',
  icon: 'Award',
  badge: 'Sarkari / Lok Sewa',
  tagline: 'Preparation plan - 8-12 months',
  stats: {
    duration: '8-12 months',
    difficulty: 'Advanced',
    topics: 10
  },
  phases: [
    {
      id: 'ls-phase-1',
      title: '1. First Phase: GK & IQ Paper (Pratham Patra)',
      description: 'Master general awareness, geography, history, science, constitution, and verbal/non-verbal reasoning.',
      nodes: [
        {
          id: 'gk-nepal',
          label: 'Nepal Geography & History',
          importance: 'critical',
          description: 'Study physical geography, rivers, mountains, historical dynasties (Lichhavi, Malla, Shah), and cultural heritage.',
          objectives: [
            'Learn provinces, districts, major mountain peaks, and river basins of Nepal.',
            'Understand key historical unification milestones and constitutional history.',
            'Memorize economic indicators and periodic national development plans.'
          ],
          bestPractices: [
            'Use daily flashcards for historical dates and administrative data.',
            'Practice past 10 yearsLok Sewa exam question sets.'
          ],
          mistakes: [
            'Focusing only on theoretical books without reading current economic surveys and government reports.'
          ],
          tips: 'Read the official Rastriya Samachar Samiti (RSS) news and Gorkhapatra Wednesday editions regularly.',
          project: {
            name: 'GK Flashcard Engine',
            desc: 'Compile a comprehensive digital summary of 500+ high-frequency Lok Sewa objective questions.'
          },
          interview: [
            {
              q: 'What are the main constitutional bodies listed under the Constitution of Nepal?',
              a: 'Key constitutional bodies include the Commission for the Investigation of Abuse of Authority (CIAA), Auditor General, Public Service Commission (PSC), Election Commission, and National Human Rights Commission.'
            }
          ],
          resources: [
            { title: 'Public Service Commission Official Site', url: 'https://psc.gov.np', type: 'link' }
          ]
        },
        {
          id: 'iq-reasoning',
          label: 'Logical & Numerical IQ',
          importance: 'critical',
          description: 'Master quantitative reasoning, series completion, matrix patterns, spatial visualization, and data interpretation.',
          objectives: [
            'Solve series, analogies, classification, and coding-decoding problems quickly.',
            'Master data interpretation charts, percentages, ratios, and time/work math.',
            'Improve speed for 50-minute objective paper constraints.'
          ],
          bestPractices: [
            'Learn mental math shortcuts for fast calculations.',
            'Practice timed mock tests weekly.'
          ],
          mistakes: [
            'Spending more than 1 minute on a single difficult IQ problem during objective exams.'
          ],
          tips: 'Work backwards from answer choices when solving complex numerical puzzles.',
          project: {
            name: 'Timed Mock Practice',
            desc: 'Complete 20 full-length objective model tests with strict 45-minute countdown timers.'
          },
          interview: [
            {
              q: 'How do you prioritize questions in the objective paper?',
              a: 'First solve quick memory-based GK questions, then straightforward numerical IQ, leaving complex non-verbal pattern questions for the final pass.'
            }
          ],
          dependsOn: ['gk-nepal'],
          resources: [
            { title: 'Lok Sewa IQ Model Sets', url: 'https://psc.gov.np', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'ls-phase-2',
      title: '2. Written Examination (Dwitiya & Tritiya Patra)',
      description: 'Master subjective paper writing, public administration, governance, and contemporary policy issues.',
      nodes: [
        {
          id: 'governance-admin',
          label: 'Governance & Public Administration',
          importance: 'critical',
          description: 'Understand public policy, civil service regulations, federal governance structure, financial management, and anti-corruption frameworks.',
          objectives: [
            'Explain the principles of Good Governance, Right to Information, and Public Accountability.',
            'Analyze federal, provincial, and local government jurisdiction division.',
            'Write structured, bulleted subjective exam answers within time limits.'
          ],
          bestPractices: [
            'Include relevant Constitutional Articles and Law references in every long answer.',
            'Use diagrams and flowcharts to illustrate administrative processes.'
          ],
          mistakes: [
            'Writing unorganized long paragraphs without clear subheadings and point conclusions.'
          ],
          tips: 'Practice writing 10-mark answers strictly within 13 minutes per question.',
          project: {
            name: 'Subjective Answer Bank',
            desc: 'Draft 50 model long answers covering public administration, financial legislation, and development issues.'
          },
          interview: [
            {
              q: 'What is Federalism under the Constitution of Nepal?',
              a: 'Federalism in Nepal divides power among three tiers of government (Federal, Provincial, Local) to ensure decentralized governance, inclusive development, and local self-rule.'
            }
          ],
          dependsOn: ['iq-reasoning'],
          resources: [
            { title: 'Nepal Law Commission Gazette', url: 'https://lawcommission.gov.np', type: 'link' }
          ]
        }
      ]
    }
  ]
};
