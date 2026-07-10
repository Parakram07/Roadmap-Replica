<p align="center">
  <img src="src/components/ui/logo.svg" alt="Pathify Logo" width="80" height="80" />
</p>

<h1 align="center">Pathify</h1>

<p align="center">
  <strong>An interactive, enterprise-grade developer learning platform for structured career roadmaps.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-roadmaps-available">Roadmaps</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-design-system">Design System</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

---

## 📖 About

**Pathify** is a modern, fully responsive web application inspired by [roadmap.sh](https://roadmap.sh/) — built from the ground up as a premium educational platform that helps developers navigate their engineering careers through interactive, visual learning pathways.

Unlike a simple clone, Pathify is a content-rich, enterprise-level application featuring **12 comprehensive roadmaps**, a **global command palette search**, a **side-by-side path comparison tool**, **persistent progress tracking** via localStorage, a **dark/light theme toggle**, and **glassmorphism UI design** — all wrapped in smooth micro-animations and premium aesthetics.

---

## ✨ Features

### 🗺️ Interactive Roadmap Visualizer
- **Visual node-based canvas** rendering each roadmap as interconnected topic nodes with dependency arrows.
- **Color-coded node importance** indicators: critical (red), recommended (amber), and optional (gray).
- **Click any node** to open a detailed knowledge drawer with tabbed content.
- **Collapsible timeline lists** on mobile for responsive consumption.
- **Node filtering** to search within a specific roadmap.

### 📚 Deep Knowledge Drawer
- **4 tabbed sections** per topic node:
  - **Overview** — Description, learning objectives, best practices, and common mistakes.
  - **Knowledge** — Curated external resource links (videos, articles, documentation).
  - **Interview Prep** — Expandable accordion Q&A cards with detailed answers.
  - **Practice** — Hands-on project suggestions with scope descriptions.
- **Progress status toggling**: Mark nodes as *Completed*, *In Progress*, or *Unvisited* with one click.

### 🔍 Global Command Palette Search
- **Trigger with** `/` or `Ctrl+K` keyboard shortcuts from anywhere in the app.
- **Searches across all 12 roadmaps** — every node title, description, and phase name is indexed.
- **Instant filtering** with highlighted results and direct navigation to specific roadmap nodes.
- **Overlay modal** with backdrop blur and focus-trapped keyboard navigation.

### ⚖️ Side-by-Side Path Comparison
- **Select any two roadmaps** from dropdown selectors and compare them head-to-head.
- **Statistics comparison**: topic counts, estimated durations, difficulty levels, and phase breakdowns.
- **Crossover analysis**: automatically detects overlapping fundamental topics between two paths.
- **Salary estimation bands** per role/skill to inform career decisions.

### 📊 Homepage Dashboard
- **Hero section** with gradient text, animated glow effects, and a sparkle badge.
- **Platform statistics panel**: learner counts, completion rates, and update indicators.
- **Technology Radar grid**: trending tools and frameworks with growth percentage indicators.
- **Curated Roadmap Catalog** with multi-axis filtering:
  - **Category tabs**: All Paths / Developer Roles / Skills.
  - **Experience level selector**: Beginner / Intermediate / Advanced.
  - **Real-time text search** across titles and descriptions.
- **Learning Methodology pipeline**: a 4-step visual process strip explaining the pedagogy.
- **User testimonials carousel** with avatar badges and role attributions.

### 🌗 Dark / Light Theme Toggle
- **System-aware** theme initialization with manual override.
- **Persistent theme preference** saved to `localStorage`.
- **Full CSS custom property swap** — every component respects the active theme via `data-theme` attribute.

### ⚡ Skeleton Loading States
- **Shimmer placeholder frames** during view transitions (450ms simulated latency for premium feel).
- **Two loader variants**: `card-list` (for home grid) and `canvas` (for roadmap view).

### 📱 Fully Responsive Design
- **Breakpoints** at 768px and 480px for seamless tablet and mobile experiences.
- **Collapsible navigation** on mobile with hamburger menu toggle.
- **Stacked card grids** and timeline-based roadmap layouts on smaller screens.

---

## 🛠️ Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | [React](https://react.dev/) | `19.2.7` | Component-based UI library with hooks |
| **Build Tool** | [Vite](https://vite.dev/) | `8.1.1` | Lightning-fast HMR dev server & production bundler |
| **Icons** | [Lucide React](https://lucide.dev/) | `0.469.0` | 1000+ open-source SVG icons as React components |
| **Styling** | CSS Modules + Custom Properties | — | Scoped component styles with global design tokens |
| **Typography** | [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | — | Premium sans-serif typeface (300–800 weights) |
| **Linting** | [OxLint](https://oxc.rs/docs/guide/usage/linter.html) | `1.71.0` | Blazing-fast Rust-based JavaScript linter |
| **State** | React Context + localStorage | — | Global progress tracking with persistence |
| **Routing** | Hash-based SPA routing | — | Custom `hashchange` listener with transition states |

### Why These Choices?

- **React 19** — Leverages the latest concurrent features and hooks API for optimal rendering.
- **Vite 8** — Sub-second HMR and optimized production builds (~340 KB gzipped total bundle).
- **CSS Modules** — Zero runtime CSS-in-JS overhead with guaranteed class name scoping. No Tailwind dependency.
- **Lucide React 0.469.0** — Pinned to this version for stable brand icon availability (newer versions reorganize exports).
- **No router library** — Hash routing keeps the bundle lean; the app has only 3 views (Home, Roadmap, Compare).

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (ships with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Parakram07/Roadmap-Replica.git

# 2. Navigate into the project
cd Roadmap-Replica

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Create optimized production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run OxLint across all source files |

### Production Build

```bash
npm run build
```

Build output:
```
dist/assets/logo-BoUdlyxe.svg     0.41 kB │ gzip:   0.24 kB
dist/index.html                   1.92 kB │ gzip:   0.70 kB
dist/assets/index-Cc38RWVA.css   51.07 kB │ gzip:   9.11 kB
dist/assets/index-C_etrlsc.js   338.76 kB │ gzip: 104.85 kB
```

---

## 📁 Project Structure

```
Roadmap-Replica/
├── public/                          # Static public assets
├── src/
│   ├── assets/                      # Static assets (images, fonts)
│   ├── components/
│   │   ├── roadmap/
│   │   │   ├── RoadmapCanvas.jsx    # Interactive node graph visualizer
│   │   │   └── RoadmapCanvas.module.css
│   │   └── ui/
│   │       ├── Drawer.jsx           # Tabbed knowledge panel (4 tabs)
│   │       ├── Drawer.module.css
│   │       ├── Footer.jsx           # Site-wide footer component
│   │       ├── Footer.module.css
│   │       ├── Header.jsx           # Sticky navigation bar
│   │       ├── Header.module.css
│   │       ├── SearchPalette.jsx    # Global command palette (Ctrl+K)
│   │       ├── SearchPalette.module.css
│   │       ├── SkeletonLoader.jsx   # Shimmer loading placeholders
│   │       ├── SkeletonLoader.module.css
│   │       └── logo.svg             # Pathify brand logo
│   ├── context/
│   │   └── ProgressContext.jsx      # React Context for progress + theme state
│   ├── data/
│   │   ├── index.js                 # Central registry exporting all 12 roadmaps
│   │   ├── frontendData.js          # Frontend Developer roadmap
│   │   ├── backendData.js           # Backend Developer roadmap
│   │   ├── devopsData.js            # DevOps Engineer roadmap
│   │   ├── reactData.js             # React Developer roadmap
│   │   ├── gitData.js               # Git & GitHub roadmap
│   │   ├── fullstackData.js         # Full-Stack Developer roadmap
│   │   ├── mobileData.js            # Mobile Developer roadmap
│   │   ├── cybersecurityData.js     # Cybersecurity Engineer roadmap
│   │   ├── dataScientistData.js     # Data Scientist roadmap
│   │   ├── nodejsData.js            # Node.js Developer roadmap
│   │   ├── dockerData.js            # Docker & Containers roadmap
│   │   └── typescriptData.js        # TypeScript Developer roadmap
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page with catalog, dashboard, filters
│   │   ├── Home.module.css
│   │   ├── RoadmapView.jsx          # Individual roadmap page wrapper
│   │   ├── RoadmapView.module.css
│   │   ├── RoadmapCompare.jsx       # Side-by-side comparison tool
│   │   └── RoadmapCompare.module.css
│   ├── styles/
│   │   └── variables.css            # Global CSS design tokens & theme variables
│   ├── App.jsx                      # Root component with hash routing
│   ├── App.css                      # Root layout styles
│   ├── index.css                    # Global resets and base styles
│   └── main.jsx                     # React DOM entry point
├── index.html                       # HTML shell with SEO meta tags
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies and scripts
└── .gitignore                       # Git ignore rules
```

---

## 🗺️ Roadmaps Available

Pathify ships with **12 comprehensive roadmaps**, categorized into Role-Based and Skill-Based paths:

### Role-Based Paths (7)
| Roadmap | Icon | Difficulty | Duration | Topics |
|---------|------|------------|----------|--------|
| Frontend Developer | `Layout` | Beginner | 3–6 months | 14 |
| Backend Developer | `Server` | Intermediate | 4–6 months | 10 |
| DevOps Engineer | `GitBranch` | Advanced | 6–8 months | 7 |
| Full-Stack Developer | `Layers` | Advanced | 9–12 months | 12 |
| Mobile Developer | `Smartphone` | Advanced | 8–10 months | 10 |
| Cybersecurity Engineer | `Shield` | Expert | 10–12 months | 9 |
| Data Scientist | `LineChart` | Advanced | 10–12 months | 11 |

### Skill-Based Paths (5)
| Roadmap | Icon | Difficulty | Duration | Topics |
|---------|------|------------|----------|--------|
| React Developer | `Atom` | Intermediate | 2–3 months | 7 |
| Git & GitHub | `GitPullRequest` | Beginner | 1–2 weeks | 5 |
| Node.js Developer | `Cpu` | Intermediate | 3–4 months | 8 |
| Docker & Containers | `Box` | Intermediate | 2–3 weeks | 6 |
| TypeScript Developer | `Code` | Intermediate | 1–2 months | 6 |

### Roadmap Data Schema

Each roadmap file follows a consistent data structure:

```javascript
{
  id: 'string',              // Unique identifier
  title: 'string',           // Display name
  description: 'string',     // Summary paragraph
  category: 'role' | 'skill',
  icon: 'string',            // Lucide icon name
  stats: {
    duration: 'string',      // Estimated completion time
    difficulty: 'string',    // Beginner | Intermediate | Advanced | Expert
    topics: number           // Total topic count
  },
  phases: [
    {
      id: 'string',
      title: 'string',       // Phase heading
      description: 'string',
      nodes: [
        {
          id: 'string',
          label: 'string',
          importance: 'critical' | 'recommended' | 'optional',
          description: 'string',
          objectives: ['string'],
          bestPractices: ['string'],
          mistakes: ['string'],
          tips: 'string',
          project: { name: 'string', desc: 'string' },
          interview: [{ q: 'string', a: 'string' }],
          dependsOn: ['nodeId'],
          resources: [{ title: 'string', url: 'string', type: 'video' | 'link' }]
        }
      ]
    }
  ]
}
```

---

## 🏗️ Architecture

### Application Flow

```
index.html
  └── main.jsx (React DOM root)
        └── App.jsx (Hash Router + Layout Shell)
              ├── ProgressProvider (Context)
              ├── Header (Sticky Navigation)
              ├── <main> (View Switcher)
              │     ├── Home (Catalog + Dashboard)
              │     ├── RoadmapView → RoadmapCanvas → Drawer
              │     └── RoadmapCompare
              ├── Footer
              └── SearchPalette (Global Overlay)
```

### State Management

The application uses **React Context API** with `localStorage` persistence — no external state libraries.

| State | Scope | Persistence |
|-------|-------|-------------|
| `progress` | Global (Context) | `localStorage` key: `roadmap_progress` |
| `theme` | Global (Context) | `localStorage` key: `roadmap_theme` |
| `currentView` | App-level (useState) | URL hash fragment |
| `searchQuery`, `activeTab`, `selectedLevel` | Page-level (useState) | None (resets on navigation) |

### Routing Strategy

Pathify uses a lightweight **hash-based SPA router** instead of React Router to keep the bundle lean:

| Route | View | Description |
|-------|------|-------------|
| `#/` or `(empty)` | Home | Landing page with catalog grid |
| `#/roadmap/:id` | RoadmapView | Interactive roadmap canvas |
| `#/compare` | RoadmapCompare | Side-by-side path comparison |

View transitions include a **450ms skeleton loader delay** to create a premium loading experience.

---

## 🎨 Design System

### Color Palette

Pathify uses a curated, dual-theme color system defined entirely in CSS custom properties:

**Dark Theme (Default)**
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#090d16` | Page background |
| `--bg-secondary` | `#0f172a` | Card backgrounds |
| `--accent-indigo` | `#6366f1` | Primary accent, active states |
| `--accent-violet` | `#8b5cf6` | Secondary accent, gradients |
| `--accent-emerald` | `#10b981` | Success, completion status |
| `--accent-amber` | `#f59e0b` | Warning, in-progress status |
| `--accent-rose` | `#f43f5e` | Critical importance, errors |

**Light Theme**
Activated via `[data-theme="light"]` selector — swaps backgrounds to whites/grays and adjusts glow opacities.

### Glassmorphism

Components use a shared `.glass-panel` utility:
- **Background**: Semi-transparent (`rgba`) with `backdrop-filter: blur(12px)`
- **Border**: 1px solid with 5–8% white opacity
- **Shadow**: Deep `box-shadow` for floating depth

### Typography

- **Font Family**: `Poppins` (Google Fonts) with system font fallbacks
- **Scale**: 8 sizes from `0.75rem` (xs) to `3rem` (5xl)
- **Weights**: Light (300) through Extra-Bold (800)

### Animations

- **Transition speeds**: Fast (0.15s), Normal (0.3s), Slow (0.5s), Spring (cubic-bezier bounce)
- **Hover effects**: Scale transforms, border glow intensification, background opacity shifts
- **Skeleton shimmer**: CSS gradient animation cycling from dark to lighter tones
- **Hero glow**: Animated radial gradient pulse behind the hero heading

---

## 🖼️ Screenshots

> Run `npm run dev` and navigate through the application to see:
> - **Home Page** — Hero section, dashboard stats, technology radar, filtered catalog grid
> - **Roadmap Canvas** — Interactive node graph with color-coded importance levels
> - **Knowledge Drawer** — Tabbed deep-dive panel with Overview, Resources, Interview, and Practice tabs
> - **Comparison Tool** — Side-by-side roadmap stat breakdowns with crossover analysis
> - **Command Palette** — Global search overlay triggered by `/` or `Ctrl+K`
> - **Dark / Light Themes** — Full theme toggle with persistent preference

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "feat: add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Adding a New Roadmap

1. Create a new data file in `src/data/` following the [schema](#roadmap-data-schema) documented above.
2. Import and register it in `src/data/index.js` (add to both `roadmaps` object and `roadmapList` array).
3. Add the icon mapping in the `getIcon()` switch statement in `src/pages/Home.jsx`.
4. Import the Lucide icon at the top of `Home.jsx`.
5. Run `npm run build` to verify compilation.

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|--------|-------|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation changes |
| `style:` | Code formatting (no logic changes) |
| `refactor:` | Code restructuring |
| `chore:` | Build/tooling changes |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Parakram K.C.
</p>
