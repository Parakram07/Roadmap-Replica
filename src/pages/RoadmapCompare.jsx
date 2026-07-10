import React, { useState } from 'react';
import { roadmapList } from '../data';
import { ArrowRightLeft, DollarSign, Briefcase, Zap, ShieldAlert, Sparkles, BookOpen, Layers } from 'lucide-react';
import styles from './RoadmapCompare.module.css';

export default function RoadmapCompare({ onSelectRoadmap }) {
  const [leftPathId, setLeftPathId] = useState('frontend');
  const [rightPathId, setRightPathId] = useState('backend');

  const leftPath = roadmapList.find(r => r.id === leftPathId);
  const rightPath = roadmapList.find(r => r.id === rightPathId);

  // Mocked comparison metric databases for high fidelity values
  const pathMetrics = {
    frontend: {
      salary: '$112,000 / year',
      demand: 'Very High (18% YoY Growth)',
      difficulty: 'Intermediate',
      primaryFocus: 'User interface components, responsive styles, state management, client rendering.',
      languages: 'JavaScript, HTML, CSS, TypeScript',
      tools: 'Vite, npm/pnpm, Git, Chrome DevTools',
      fundamentals: ['internet', 'html', 'css', 'javascript', 'git', 'package-managers', 'vite', 'web-security']
    },
    backend: {
      salary: '$124,000 / year',
      demand: 'Extremely High (22% YoY Growth)',
      difficulty: 'Advanced',
      primaryFocus: 'Database transactions, Web servers, API design, session credentials, system tasks.',
      languages: 'Node.js (JS/TS), Python, Go, SQL',
      tools: 'PostgreSQL, MongoDB, Prisma ORM, Docker, Express',
      fundamentals: ['cli-terminal', 'nodejs', 'git', 'package-managers', 'web-security']
    },
    devops: {
      salary: '$135,000 / year',
      demand: 'High (Docker/K8s specialization)',
      difficulty: 'Expert',
      primaryFocus: 'Server deployments, CI/CD pipelines, container orchestration, monitoring, automation.',
      languages: 'Bash, Python, YAML, Go',
      tools: 'Docker, Kubernetes, Terraform, Ansible, Nginx, Prometheus',
      fundamentals: ['linux-admin', 'dns-networking', 'git', 'web-security']
    },
    react: {
      salary: '$118,000 / year',
      demand: 'Very High (Most requested library)',
      difficulty: 'Intermediate',
      primaryFocus: 'Component structures, hook cycles, custom logic hooks, TanStack queries.',
      languages: 'JSX, JavaScript, TypeScript',
      tools: 'Vite, React DevTools, Zustand, React Router',
      fundamentals: ['react-js-essentials', 'vite-react-setup']
    },
    git: {
      salary: 'Essential Core Skill',
      demand: 'Required for all engineering roles',
      difficulty: 'Beginner',
      primaryFocus: 'Branch merges, commit snapshots, logs inspect, remote GitHub collaboration.',
      languages: 'Bash commands',
      tools: 'Git CLI, GitHub Desktop, SourceTree',
      fundamentals: ['vcs-intro', 'git-config']
    }
  };

  const leftMetrics = pathMetrics[leftPathId];
  const rightMetrics = pathMetrics[rightPathId];

  // Calculate overlapping fundamentals
  const overlappingKeys = leftMetrics.fundamentals.filter(val => rightMetrics.fundamentals.includes(val));
  
  // Resolve overlapping node titles
  const getOverlappingTitles = () => {
    const titles = [];
    const allNodes = [...leftPath.phases.flatMap(p => p.nodes), ...rightPath.phases.flatMap(p => p.nodes)];
    overlappingKeys.forEach(key => {
      const match = allNodes.find(n => n.id === key);
      if (match && !titles.includes(match.label)) {
        titles.push(match.label);
      }
    });
    // Add default shared items if list is empty for presentation
    if (titles.length === 0) return ['Git Version Control', 'Basic CLI Navigation'];
    return titles;
  };

  const sharedTopics = getOverlappingTitles();

  return (
    <div className={styles.compareContainer}>
      {/* Header section */}
      <section className={styles.header}>
        <div className={styles.badgeLabel}>
          <Layers size={12} />
          <span>Path Comparison Utility</span>
        </div>
        <h1 className={styles.title}>Compare Learning Paths</h1>
        <p className={styles.subtitle}>
          Analyze salary projections, workload demands, shared fundamentals, and specialized skillsets side-by-side to choose your ideal career direction.
        </p>
      </section>

      {/* Select selectors */}
      <section className={`${styles.selectBar} glass-panel`}>
        <div className={styles.selectWrapper}>
          <label className={styles.selectLabel}>Primary Pathway</label>
          <select 
            value={leftPathId}
            onChange={(e) => setLeftPathId(e.target.value)}
            className={styles.dropdown}
          >
            {roadmapList.map(r => (
              <option key={r.id} value={r.id}>{r.title}</option>
            ))}
          </select>
        </div>

        <div className={styles.compareIconBtn}>
          <ArrowRightLeft size={20} />
        </div>

        <div className={styles.selectWrapper}>
          <label className={styles.selectLabel}>Secondary Pathway</label>
          <select 
            value={rightPathId}
            onChange={(e) => setRightPathId(e.target.value)}
            className={styles.dropdown}
          >
            {roadmapList.map(r => (
              <option key={r.id} value={r.id}>{r.title}</option>
            ))}
          </select>
        </div>
      </section>

      {leftPathId === rightPathId ? (
        <div className={`${styles.alert} glass-panel`}>
          <ShieldAlert size={20} className={styles.alertIcon} />
          <span>You have selected the same path. Please select two different tracks to compare metrics!</span>
        </div>
      ) : (
        /* Comparison Dashboard Grid */
        <section className={styles.dashboard}>
          <div className={styles.comparisonGrid}>
            
            {/* Meta specs row */}
            <div className={`${styles.compareCard} glass-panel`}>
              <h3 className={styles.cardHeaderTitle}>{leftPath.title}</h3>
              <div className={styles.metricsList}>
                <div className={styles.metricRow}>
                  <DollarSign size={16} className={styles.metricIconBlue} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{leftMetrics.salary}</span>
                    <span className={styles.metricLabel}>Average Salary</span>
                  </div>
                </div>
                <div className={styles.metricRow}>
                  <Briefcase size={16} className={styles.metricIconViolet} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{leftMetrics.demand}</span>
                    <span className={styles.metricLabel}>Market Demand</span>
                  </div>
                </div>
                <div className={styles.metricRow}>
                  <Zap size={16} className={styles.metricIconGreen} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{leftPath.stats?.duration}</span>
                    <span className={styles.metricLabel}>Typical Duration</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.focusSection}>
                <span className={styles.focusLabel}>Primary Focus</span>
                <p className={styles.focusDesc}>{leftMetrics.primaryFocus}</p>
              </div>

              <div className={styles.listsSection}>
                <span className={styles.focusLabel}>Core Languages</span>
                <p className={styles.itemTagString}>{leftMetrics.languages}</p>
              </div>

              <button className={`${styles.exploreBtn} gradient-border-btn`} onClick={() => onSelectRoadmap(leftPath.id)}>
                Start {leftPath.title}
              </button>
            </div>

            {/* Right path card */}
            <div className={`${styles.compareCard} glass-panel`}>
              <h3 className={styles.cardHeaderTitle}>{rightPath.title}</h3>
              <div className={styles.metricsList}>
                <div className={styles.metricRow}>
                  <DollarSign size={16} className={styles.metricIconBlue} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{rightMetrics.salary}</span>
                    <span className={styles.metricLabel}>Average Salary</span>
                  </div>
                </div>
                <div className={styles.metricRow}>
                  <Briefcase size={16} className={styles.metricIconViolet} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{rightMetrics.demand}</span>
                    <span className={styles.metricLabel}>Market Demand</span>
                  </div>
                </div>
                <div className={styles.metricRow}>
                  <Zap size={16} className={styles.metricIconGreen} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{rightPath.stats?.duration}</span>
                    <span className={styles.metricLabel}>Typical Duration</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.focusSection}>
                <span className={styles.focusLabel}>Primary Focus</span>
                <p className={styles.focusDesc}>{rightMetrics.primaryFocus}</p>
              </div>

              <div className={styles.listsSection}>
                <span className={styles.focusLabel}>Core Languages</span>
                <p className={styles.itemTagString}>{rightMetrics.languages}</p>
              </div>

              <button className={`${styles.exploreBtn} gradient-border-btn`} onClick={() => onSelectRoadmap(rightPath.id)}>
                Start {rightPath.title}
              </button>
            </div>

            {/* Overlap / Shared Fundamentals segment */}
            <div className={`${styles.overlapCard} glass-panel`}>
              <div className={styles.overlapHeader}>
                <Sparkles size={18} className={styles.overlapIcon} />
                <h3 className={styles.overlapTitle}>Crossover Fundamentals</h3>
              </div>
              <p className={styles.overlapDesc}>
                If you learn these shared core concepts, you will complete milestones on both pathways simultaneously.
              </p>
              <div className={styles.sharedTopicsGrid}>
                {sharedTopics.map((topic, idx) => (
                  <div key={idx} className={styles.sharedTopicBadge}>
                    <BookOpen size={12} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}
    </div>
  );
}
