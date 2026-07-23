import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { roadmapList } from '../data';
import { 
  Award, Landmark, BookOpen, ShieldAlert, Compass, Sparkles, Layout, Server, 
  GitBranch, Atom, GitPullRequest, Layers, Smartphone, Shield, LineChart, Cpu, 
  Box, Code, ArrowRight, CheckCircle, Search, Users, Trophy
} from 'lucide-react';
import MapPreviewIllustration from '../components/ui/MapPreviewIllustration';
import CareerQuizModal from '../components/ui/CareerQuizModal';
import styles from './Home.module.css';

export default function Home({ onSelectRoadmap }) {
  const { language, t, getLocalizedRoadmap } = useProgress();
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'sarkari' | 'tech_creative' | 'role' | 'skill'
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced'
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={22} className={styles.sarkariIcon} />;
      case 'Landmark': return <Landmark size={22} className={styles.sarkariIcon} />;
      case 'BookOpen': return <BookOpen size={22} className={styles.sarkariIcon} />;
      case 'ShieldAlert': return <ShieldAlert size={22} className={styles.sarkariIcon} />;
      case 'Compass': return <Compass size={22} className={styles.creativeIcon} />;
      case 'Sparkles': return <Sparkles size={22} className={styles.creativeIcon} />;
      case 'Layout': return <Layout size={22} className={styles.techIcon} />;
      case 'LineChart': return <LineChart size={22} className={styles.techIcon} />;
      case 'Server': return <Server size={22} className={styles.techIcon} />;
      case 'GitBranch': return <GitBranch size={22} className={styles.techIcon} />;
      case 'Layers': return <Layers size={22} className={styles.techIcon} />;
      case 'Smartphone': return <Smartphone size={22} className={styles.techIcon} />;
      case 'Shield': return <Shield size={22} className={styles.techIcon} />;
      case 'Atom': return <Atom size={22} className={styles.techIcon} />;
      case 'GitPullRequest': return <GitPullRequest size={22} className={styles.techIcon} />;
      case 'Cpu': return <Cpu size={22} className={styles.techIcon} />;
      case 'Box': return <Box size={22} className={styles.techIcon} />;
      case 'Code': return <Code size={22} className={styles.techIcon} />;
      default: return <Compass size={22} />;
    }
  };

  const filteredAllRoadmaps = roadmapList.map((r) => getLocalizedRoadmap(r)).filter((roadmap) => {
    let matchesCategory = true;
    if (activeCategory !== 'all') {
      if (activeCategory === 'tech_creative') {
        matchesCategory = roadmap.category === 'tech_creative' || roadmap.id === 'frontend' || roadmap.id === 'datascientist';
      } else {
        matchesCategory = roadmap.category === activeCategory;
      }
    }

    let matchesLevel = true;
    if (selectedLevel !== 'all') {
      const difficulty = roadmap.stats?.difficulty?.toLowerCase();
      if (selectedLevel === 'beginner') matchesLevel = difficulty === 'beginner';
      if (selectedLevel === 'intermediate') matchesLevel = difficulty === 'intermediate';
      if (selectedLevel === 'advanced') matchesLevel = difficulty === 'advanced' || difficulty === 'expert';
    }

    return matchesCategory && matchesLevel;
  });

  const scrollToCatalog = () => {
    const section = document.getElementById('find-your-path');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className={styles.homeContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Hero Left Content */}
          <div className={styles.heroLeft}>
            <span className={styles.tagline}>{t('heroTagline')}</span>
            <h1 className={styles.heroHeading}>
              {t('heroTitle1')}<br />
              {t('heroTitle2')}
            </h1>
            <p className={styles.heroSubtitle}>
              {t('heroSubtitle')}
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={scrollToCatalog}>
                {t('exploreRoadmaps')}
              </button>
              <button className={styles.secondaryBtn} onClick={() => setQuizModalOpen(true)}>
                {t('takeQuiz')}
              </button>
            </div>
          </div>

          {/* Hero Right Preview Illustration */}
          <div className={styles.heroRight}>
            <MapPreviewIllustration onSelectRoadmap={onSelectRoadmap} />
          </div>
        </div>
      </section>

      {/* Main "Find your path" Section */}
      <section id="find-your-path" className={styles.findPathSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('findYourPath')}</h2>
        </div>

        {/* Expanded All Pathways Filter Catalog */}
        <div className={styles.expandedCatalogBlock}>
          <div className={styles.toolbarRow}>
            <div className={styles.categoryTabs}>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'all' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                {t('allPathways')} ({roadmapList.length})
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'sarkari' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('sarkari')}
              >
                {t('sarkariTab')}
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'tech_creative' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('tech_creative')}
              >
                {t('creativeTab')}
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'role' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('role')}
              >
                {t('softwareTab')}
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'skill' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('skill')}
              >
                {t('skillsTab')}
              </button>
            </div>

            <div className={styles.levelFilter}>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className={styles.levelSelect}
              >
                <option value="all">{t('allDifficulty')}</option>
                <option value="beginner">{t('beginner')}</option>
                <option value="intermediate">{t('intermediate')}</option>
                <option value="advanced">{t('advanced')}</option>
              </select>
            </div>
          </div>

          <div className={styles.fullGrid}>
            {filteredAllRoadmaps.map((roadmap) => (
              <div 
                key={roadmap.id} 
                className={`${styles.fullCard} glass-panel`}
                onClick={() => onSelectRoadmap(roadmap.id)}
              >
                <div className={styles.fullCardTop}>
                  <div className={styles.cardIconBox}>
                    {getIcon(roadmap.icon)}
                  </div>
                  <span className={styles.difficultyBadge}>{getLocalizedDifficulty(roadmap.stats?.difficulty)}</span>
                </div>
                <h4 className={styles.fullCardTitle}>{roadmap.title}</h4>
                <p className={styles.fullCardDesc}>{roadmap.description}</p>
                <div className={styles.fullCardMeta}>
                  <span>{roadmap.stats?.duration}</span>
                  <span>•</span>
                  <span>{roadmap.stats?.topics} {t('topicsCount')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Quiz Modal */}
      <CareerQuizModal 
        isOpen={quizModalOpen} 
        onClose={() => setQuizModalOpen(false)} 
        onSelectRoadmap={onSelectRoadmap}
      />

    </div>
  );
}
