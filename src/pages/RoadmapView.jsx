import React from 'react';
import RoadmapCanvas from '../components/roadmap/RoadmapCanvas';
import { ArrowLeft, BookOpen, Clock, BarChart3, Compass } from 'lucide-react';
import styles from './RoadmapView.module.css';

export default function RoadmapView({ roadmap, onBackToHome }) {
  if (!roadmap) return null;

  return (
    <div className={styles.roadmapViewContainer}>
      {/* Back button and breadcrumbs */}
      <div className={styles.navigationHeader}>
        <button className={styles.backBtn} onClick={onBackToHome}>
          <ArrowLeft size={16} />
          <span>Back to catalog</span>
        </button>
        
        <div className={styles.breadcrumbs}>
          <a href="#" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className={styles.crumb}>Catalog</a>
          <span className={styles.separator}>/</span>
          <span className={styles.activeCrumb}>{roadmap.title}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className={`${styles.roadmapHeader} glass-panel`}>
        <div className={styles.headerGrid}>
          <div className={styles.titleCol}>
            <div className={styles.metaBadgeGroup}>
              <span className={`${styles.categoryBadge} ${styles[roadmap.category]}`}>
                {roadmap.category === 'role' ? 'Role-Based Path' : 'Skill Tree'}
              </span>
            </div>
            
            <h1 className={styles.title}>{roadmap.title} Learning Path</h1>
            <p className={styles.description}>{roadmap.description}</p>
          </div>

          {/* Quick specs side card */}
          <div className={styles.statsCardCol}>
            <div className={styles.specItem}>
              <Clock size={18} className={styles.specIconIndigo} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{roadmap.stats?.duration || 'Self-paced'}</span>
                <span className={styles.specLabel}>Duration</span>
              </div>
            </div>
            
            <div className={styles.specItem}>
              <BarChart3 size={18} className={styles.specIconViolet} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{roadmap.stats?.difficulty || 'All Levels'}</span>
                <span className={styles.specLabel}>Difficulty</span>
              </div>
            </div>

            <div className={styles.specItem}>
              <BookOpen size={18} className={styles.specIconEmerald} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{roadmap.stats?.topics || 10}</span>
                <span className={styles.specLabel}>Key Topics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Roadmap canvas visualizer */}
      <section className={styles.canvasSection}>
        <div className={styles.layoutColumns}>
          {/* Main timeline canvas */}
          <div className={styles.mainCanvas}>
            <RoadmapCanvas roadmap={roadmap} />
          </div>

          {/* Table of contents sidebar (quick outline links) */}
          <aside className={`${styles.outlineSidebar} glass-panel`}>
            <h3 className={styles.sidebarTitle}>Path Outline</h3>
            <ul className={styles.sidebarList}>
              {roadmap.phases.map((phase, idx) => (
                <li key={phase.id} className={styles.sidebarItem}>
                  <span className={styles.phaseIdx}>0{idx + 1}</span>
                  <div className={styles.sidebarItemContent}>
                    <span className={styles.sidebarItemTitle}>{phase.title.replace(/^\d+\.\s*/, '')}</span>
                    <span className={styles.sidebarItemNodesCount}>{phase.nodes.length} topics</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
