import React from 'react';
import { useProgress } from '../context/ProgressContext';
import RoadmapCanvas from '../components/roadmap/RoadmapCanvas';
import { ArrowLeft, BookOpen, Clock, BarChart3 } from 'lucide-react';
import styles from './RoadmapView.module.css';

export default function RoadmapView({ roadmap, onBackToHome }) {
  const { language, t, getLocalizedRoadmap } = useProgress();
  const locRoadmap = getLocalizedRoadmap(roadmap);

  if (!locRoadmap) return null;

  const getLocalizedDifficulty = (diff) => {
    if (language === 'NP') {
      const d = diff?.toLowerCase();
      if (d === 'beginner') return 'सुरुवाती';
      if (d === 'intermediate') return 'मध्यम';
      if (d === 'advanced') return 'उच्च';
      if (d === 'expert') return 'विशेषज्ञ';
    }
    return diff;
  };

  return (
    <div className={styles.roadmapViewContainer}>
      {/* Back button and breadcrumbs */}
      <div className={styles.navigationHeader}>
        <button className={styles.backBtn} onClick={onBackToHome}>
          <ArrowLeft size={16} />
          <span>{t('backToCatalog')}</span>
        </button>
        
        <div className={styles.breadcrumbs}>
          <a href="#" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className={styles.crumb}>
            {language === 'NP' ? 'मुख्य सूची' : 'Catalog'}
          </a>
          <span className={styles.separator}>/</span>
          <span className={styles.activeCrumb}>{locRoadmap.title}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className={`${styles.roadmapHeader} glass-panel`}>
        <div className={styles.headerGrid}>
          <div className={styles.titleCol}>
            <div className={styles.metaBadgeGroup}>
              <span className={`${styles.categoryBadge} ${styles[locRoadmap.category]}`}>
                {locRoadmap.category === 'sarkari' ? (language === 'NP' ? 'सरकारी तथा लोक सेवा' : 'Sarkari & Lok Sewa') :
                 locRoadmap.category === 'tech_creative' ? (language === 'NP' ? 'क्रिएटिभ तथा UX' : 'Creative & UX') :
                 locRoadmap.category === 'role' ? (language === 'NP' ? 'इन्जिनियरिङ पद' : 'Role-Based Path') : (language === 'NP' ? 'विशेषीकृत सीप' : 'Skill Tree')}
              </span>
            </div>
            
            <h1 className={styles.title}>{locRoadmap.title}</h1>
            <p className={styles.description}>{locRoadmap.description}</p>
          </div>

          {/* Quick specs side card */}
          <div className={styles.statsCardCol}>
            <div className={styles.specItem}>
              <Clock size={18} className={styles.specIconIndigo} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{locRoadmap.stats?.duration || 'Self-paced'}</span>
                <span className={styles.specLabel}>{language === 'NP' ? 'अनुमानित अवधि' : 'Duration'}</span>
              </div>
            </div>
            
            <div className={styles.specItem}>
              <BarChart3 size={18} className={styles.specIconViolet} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{getLocalizedDifficulty(locRoadmap.stats?.difficulty) || 'All Levels'}</span>
                <span className={styles.specLabel}>{t('difficultyLevel')}</span>
              </div>
            </div>

            <div className={styles.specItem}>
              <BookOpen size={18} className={styles.specIconEmerald} />
              <div className={styles.specText}>
                <span className={styles.specVal}>{locRoadmap.stats?.topics || 10}</span>
                <span className={styles.specLabel}>{t('topicsCount')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visualizer Canvas */}
      <section className={styles.canvasSection}>
        <RoadmapCanvas roadmap={locRoadmap} />
      </section>
    </div>
  );
}
