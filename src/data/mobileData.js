export const mobileData = {
  id: 'mobile',
  title: 'Mobile Developer',
  description: 'Master mobile ecosystems. Build native or cross-platform iOS and Android applications, optimize memory usages, and publish to app stores.',
  category: 'role',
  icon: 'Smartphone',
  stats: {
    duration: '8-10 months',
    difficulty: 'Advanced',
    topics: 10
  },
  phases: [
    {
      id: 'mob-phase-1',
      title: '1. Framework Selection',
      description: 'Choose between compiling native code or using cross-platform UI engines.',
      nodes: [
        {
          id: 'native-ios',
          label: 'iOS Native (Swift & SwiftUI)',
          importance: 'recommended',
          description: 'Learn native iOS development: Swift programming syntax, SwiftUI reactive layouts, and layout safe areas.',
          objectives: [
            'Master Swift data structures, optionals, and closures.',
            'Build state-driven layout components using SwiftUI.',
            'Manage views using NavigationStack structures.'
          ],
          bestPractices: [
            'Use standard async/await for network triggers.',
            'Isolate visual components into separate files.'
          ],
          mistakes: [
            'Omitting Safe Area constraints, resulting in status bar overlaps.'
          ],
          tips: 'Verify UI rendering in Xcode Previews constantly during dev cycles.',
          project: {
            name: 'Native iOS Shopping Checklist',
            desc: 'Build a SwiftUI app that records checklist items, calculates price sums, and supports swipe-to-delete.'
          },
          interview: [
            {
              q: 'What is an Optional in Swift?',
              a: 'An Optional is a type that represents either a wrapped value or the absence of a value (nil), enforced by the compiler to prevent null reference errors.'
            }
          ],
          resources: [
            { title: 'SwiftUI Official Tutorials (Link)', url: 'https://developer.apple.com/tutorials/swiftui', type: 'link' }
          ]
        },
        {
          id: 'cross-platform',
          label: 'Cross-Platform (React Native)',
          importance: 'critical',
          description: 'Compile single codebase apps. Learn React Native primitives, styling sheets, native bridges, and Expo scaffolding tools.',
          objectives: [
            'Define components using View, Text, Image primitives.',
            'Coordinate page navigation using Expo Router.',
            'Implement gestures and hardware keyboard managers.'
          ],
          bestPractices: [
            'Use native drivers in animators to offload math to the GPU.',
            'Store assets using optimized image sizes to prevent mobile memory leaks.'
          ],
          mistakes: [
            'Directly nesting raw text outside Text components, crashing compilation.'
          ],
          tips: 'Inspect element structures in Chrome DevTools using React Native debugger hooks.',
          project: {
            name: 'React Native Fitness Dashboard',
            desc: 'Develop a cross-platform app showing fitness cards, workout timers, and profile items.'
          },
          interview: [
            {
              q: 'How does React Native render native UI elements?',
              a: 'It uses a JavaScript engine (Hermes) to run your JS code, which communicates layout directives via a Native Bridge/JSI to the platform\'s native rendering thread.'
            }
          ],
          resources: [
            { title: 'React Native docs (Link)', url: 'https://reactnative.dev/docs/getting-started', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'mob-phase-2',
      title: '2. Offline Data & Features',
      description: 'Store database records on device drives and synchronize updates.',
      nodes: [
        {
          id: 'local-storage',
          label: 'On-Device Databases (SQLite)',
          importance: 'critical',
          description: 'Store persistent items on devices. Learn to execute local queries using SQLite, and Room or CoreData wrappers.',
          objectives: [
            'Initialize local SQLite schemas on device folders.',
            'Implement thread-safe reads and writes.',
            'Perform local database queries.'
          ],
          bestPractices: [
            'Encrypt database volumes to secure user data.',
            'Keep writes asynchronous to avoid blocking UI rendering.'
          ],
          mistakes: [
            'Omitting index constraints, resulting in slow query times in large local tables.'
          ],
          tips: 'Use device database inspectors inside Android Studio or Xcode to inspect values.',
          project: {
            name: 'Encrypted Diary App',
            desc: 'Implement a diary app that saves diary entries to local SQLite tables encrypted via database keys.'
          },
          interview: [
            {
              q: 'Why should you avoid block operations on the main thread in mobile apps?',
              a: 'The main thread (UI thread) handles screen draws and interactions. Blocking it with heavy DB writes or fetches causes the app to freeze, triggering OS alerts (ANR in Android).'
            }
          ],
          dependsOn: ['cross-platform'],
          resources: [
            { title: 'SQLite getting started (Link)', url: 'https://www.sqlite.org/index.html', type: 'link' }
          ]
        }
      ]
    }
  ]
};
