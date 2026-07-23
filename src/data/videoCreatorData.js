export const videoCreatorData = {
  id: 'videocreator',
  title: 'Video Creator',
  description: 'Freelance & local media roadmap: scripting, video editing (Premiere/DaVinci), audio engineering, thumbnail design, and YouTube/social media growth.',
  category: 'tech_creative',
  icon: 'Sparkles',
  badge: 'Tech / Creative',
  tagline: 'Freelance + local media',
  stats: {
    duration: '3-5 months',
    difficulty: 'Intermediate',
    topics: 7
  },
  phases: [
    {
      id: 'vc-phase-1',
      title: '1. Production & Video Editing Core',
      description: 'Master storytelling, video editing software, color grading, and audio mixing.',
      nodes: [
        {
          id: 'scripting-editing',
          label: 'Storytelling & Video Editing',
          importance: 'critical',
          description: 'Master hook creation, timeline editing in DaVinci Resolve or Premiere Pro, B-roll pacing, sound design, and text callouts.',
          objectives: [
            'Structure videos with strong opening hooks, engaging middle pacing, and clear calls to action.',
            'Edit fast-paced videos with smooth cuts, transition effects, and J/L cut audio bridges.',
            'Incorporate motion graphics, captions, and sound effects to boost audience retention.'
          ],
          bestPractices: [
            'Hook the viewer within the first 5 seconds.',
            'Use high-quality B-roll footage and layered sound effects (SFX) to maintain visual interest.'
          ],
          mistakes: [
            'Neglecting audio quality; viewers forgive poor video before bad audio.'
          ],
          tips: 'Edit to the beat of background music to create rhythmic visual flow.',
          project: {
            name: 'High-Retention Short Form Reel',
            desc: 'Produce a 60-second viral reel with auto-captions, sound effects, B-roll overlays, and color grading.'
          },
          interview: [
            {
              q: 'What is a J-Cut vs an L-Cut in video editing?',
              a: 'A J-Cut is when the audio from the next scene plays before the video changes. An L-Cut is when the video changes to the next scene while the audio from the previous scene continues.'
            }
          ],
          resources: [
            { title: 'DaVinci Resolve Official Training', url: 'https://blackmagicdesign.com/products/davinciresolve/training', type: 'link' }
          ]
        },
        {
          id: 'thumbnails-analytics',
          label: 'Thumbnails & Channel Growth',
          importance: 'critical',
          description: 'Master Photoshop thumbnail design, Click-Through Rate (CTR) optimization, YouTube SEO, and client freelancing.',
          objectives: [
            'Design high-contrast, clickable video thumbnails in Photoshop or Canva.',
            'Analyze audience retention graphs, CTR metrics, and impression stats.',
            'Package video editing services for international and local freelance clients.'
          ],
          bestPractices: [
            'Keep thumbnails clean with maximum 3 key visual elements and bold, readable text.',
            'A/B test thumbnail designs to maximize Click-Through Rate.'
          ],
          mistakes: [
            'Creating crowded thumbnails with small unreadable text on mobile screens.'
          ],
          tips: 'Test thumbnail readability by scaling design down to 10% size on screen.',
          project: {
            name: 'Freelance Video Client Package',
            desc: 'Assemble a video editing portfolio reel showcasing 3 distinct video styles (tech review, vlog, promotional).'
          },
          interview: [
            {
              q: 'How do you optimize a YouTube video for higher Click-Through Rate (CTR)?',
              a: 'By creating a compelling curiosity gap between a high-contrast thumbnail image and a clear, intrigue-building title without misleading clickbait.'
            }
          ],
          dependsOn: ['scripting-editing'],
          resources: [
            { title: 'YouTube Creator Academy', url: 'https://creatoracademy.youtube.com', type: 'link' }
          ]
        }
      ]
    }
  ]
};
