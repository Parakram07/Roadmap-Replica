export const teachingData = {
  id: 'teaching',
  title: 'Teaching License',
  description: 'TSC-aligned learning route for Teachers Service Commission (Shikshak Sewa Aayog) licensing exams across primary, lower secondary, and secondary levels.',
  category: 'sarkari',
  icon: 'BookOpen',
  badge: 'Sarkari / Lok Sewa',
  tagline: 'TSC-aligned learning route',
  stats: {
    duration: '4-6 months',
    difficulty: 'Intermediate',
    topics: 7
  },
  phases: [
    {
      id: 'tc-phase-1',
      title: '1. Pedagogy & Educational Legislation',
      description: 'Master education policy, child psychology, classroom management, and curriculum development.',
      nodes: [
        {
          id: 'edu-act',
          label: 'Education Act & Regulations',
          importance: 'critical',
          description: 'Study National Education Policy, Education Act 2028, Education Rules 2059, and TSC regulations.',
          objectives: [
            'Learn legal provisions related to teacher appointments, tenure, code of conduct, and leave rules.',
            'Understand National Curriculum Framework (NCF) standards.',
            'Study constitutional provisions regarding fundamental rights to education.'
          ],
          bestPractices: [
            'Highlight amendments in Education Act 2028.',
            'Create tabular comparisons for primary vs secondary teacher qualification rules.'
          ],
          mistakes: [
            'Memorizing laws without understanding their practical classroom application.'
          ],
          tips: 'Review TSC past model sets for high-probability objective questions.',
          project: {
            name: 'Education Law Quick Reference',
            desc: 'Compile key articles of Education Act 2028 relevant to TSC licensing exams.'
          },
          interview: [
            {
              q: 'What is the role of Teachers Service Commission (TSC)?',
              a: 'TSC conducts examinations for teacher licenses, recommends candidates for permanent teacher appointments, and sets professional teaching standards.'
            }
          ],
          resources: [
            { title: 'TSC Official Website', url: 'https://tsc.gov.np', type: 'link' }
          ]
        },
        {
          id: 'pedagogy-psychology',
          label: 'Child Psychology & Teaching Methods',
          importance: 'critical',
          description: 'Master learning theories (Piaget, Vygotsky, Skinner), student-centered pedagogy, instructional materials, and continuous evaluation.',
          objectives: [
            'Apply constructive learning methods in lesson plan designs.',
            'Formulate formative and summative assessment strategies.',
            'Implement inclusive classroom techniques for diverse learners.'
          ],
          bestPractices: [
            'Focus on practical, activity-based learning approaches.',
            'Design creative low-cost instructional materials.'
          ],
          mistakes: [
            'Relying solely on traditional teacher-centric lecture methods in pedagogical questions.'
          ],
          tips: 'Emphasize student-centric learning methods when answering written questions.',
          project: {
            name: 'Model Lesson Plan Portfolio',
            desc: 'Develop 5 comprehensive lesson plans incorporating active learning and continuous assessment.'
          },
          interview: [
            {
              q: 'What is the difference between Formative and Summative Evaluation?',
              a: 'Formative evaluation is continuous throughout the learning process to provide feedback and improve teaching, whereas Summative evaluation occurs at the end of a unit/term to assign grades.'
            }
          ],
          dependsOn: ['edu-act'],
          resources: [
            { title: 'Curriculum Development Centre (CDC Nepal)', url: 'https://moecdc.gov.np', type: 'link' }
          ]
        }
      ]
    }
  ]
};
