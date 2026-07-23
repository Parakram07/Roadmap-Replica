export const policeArmyData = {
  id: 'policearmy',
  title: 'Police / Army',
  description: 'Physical fitness, medical standards, IQ, GK, and written exam route for Nepal Police (Inspector/ASI) & Nepal Army (Officer Cadet) positions.',
  category: 'sarkari',
  icon: 'ShieldAlert',
  badge: 'Sarkari / Lok Sewa',
  tagline: 'Eligibility + exam preparation',
  stats: {
    duration: '6-10 months',
    difficulty: 'Advanced',
    topics: 8
  },
  phases: [
    {
      id: 'pa-phase-1',
      title: '1. Physical Efficiency & Medical Fitness',
      description: 'Meet physical measurements, endurance benchmarks, and medical standards.',
      nodes: [
        {
          id: 'physical-standards',
          label: 'Physical Test & Endurance',
          importance: 'critical',
          description: 'Prepare for height/weight/chest requirements, 300m/3km running benchmarks, chin-ups, push-ups, and sit-ups.',
          objectives: [
            'Achieve 3km endurance run within official qualifying time limits.',
            'Master maximum chin-up and push-up rep counts for top physical scores.',
            'Pass preliminary medical screening (eyesight, color vision, flat feet, posture).'
          ],
          bestPractices: [
            'Maintain daily structured morning physical training routines.',
            'Undergo a pre-official medical checkup before applying.'
          ],
          mistakes: [
            'Starting physical conditioning too late, leading to injuries or stamina failure.'
          ],
          tips: 'Practice interval sprint training to improve 300m sprint timing.',
          project: {
            name: 'Physical Training Tracker',
            desc: 'Maintain a 12-week workout log tracking running times, push-ups, chin-ups, and physical metrics.'
          },
          interview: [
            {
              q: 'What are the main stages of the selection process for Nepal Police Inspector?',
              a: 'The stages include Physical Measurement & Fitness Test, Written Examination (conducted by Lok Sewa), Comprehensive Medical Test, Behavioral Assessment, and Board Interview.'
            }
          ],
          resources: [
            { title: 'Nepal Police Recruitment Portal', url: 'https://nepalpolice.gov.np', type: 'link' }
          ]
        },
        {
          id: 'pa-written',
          label: 'Written Exam (GK, IQ, English, Nepali)',
          importance: 'critical',
          description: 'Prepare for written papers: General Knowledge, Intelligence Test, Security/Service knowledge, English, and Nepali composition.',
          objectives: [
            'Master security organ history, law enforcement acts, and international peacekeeping context.',
            'Write fluent Nepali essays, precis, and official memos.',
            'Solve verbal and non-verbal reasoning IQ sets accurately.'
          ],
          bestPractices: [
            'Read security and geopolitical news regularly.',
            'Practice formal military/police writing styles.'
          ],
          mistakes: [
            'Neglecting language skills (English & Nepali essay writing).'
          ],
          tips: 'Memorize organizational hierarchies and ranks of Nepal Police and Nepal Army.',
          project: {
            name: 'Security Exam Question Bank',
            desc: 'Solve 15 model written papers covering security governance, constitution, and language test sets.'
          },
          interview: [
            {
              q: 'What is the role of Nepal Army under the Constitution?',
              a: 'Nepal Army is responsible for national defense, territorial integrity, assisting in disaster relief, participating in UN peacekeeping missions, and supporting national development projects.'
            }
          ],
          dependsOn: ['physical-standards'],
          resources: [
            { title: 'Nepal Army Recruitment Portal', url: 'https://nepalarmy.mil.np', type: 'link' }
          ]
        }
      ]
    }
  ]
};
