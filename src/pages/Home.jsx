import React, { useState } from 'react';
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

  const filteredAllRoadmaps = roadmapList.filter((roadmap) => {
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

  return (
    <div className={styles.homeContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Hero Left Content */}
          <div className={styles.heroLeft}>
            <span className={styles.tagline}>CAREER CLARITY FOR NEPALI STUDENTS</span>
            <h1 className={styles.heroHeading}>
              Choose a goal.<br />
              Follow a clear path.
            </h1>
            <p className={styles.heroSubtitle}>
              Step-by-step roadmaps with affordable, local and global learning resources.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn} onClick={scrollToCatalog}>
                Explore roadmaps
              </button>
              <button className={styles.secondaryBtn} onClick={() => setQuizModalOpen(true)}>
                Take career quiz
              </button>
            </div>
          </div>

          {/* Hero Right Preview Illustration */}
          <div className={styles.heroRight}>
            <MapPreviewIllustration onSelectRoadmap={onSelectRoadmap} />
          </div>
        </div>
      </section>

      {/* Main "Find your path" Section: Direct Filter Catalog */}
      <section id="find-your-path" className={styles.findPathSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Find your path</h2>
        </div>

        {/* Expanded All Pathways Filter Catalog */}
        <div className={styles.expandedCatalogBlock}>
          <div className={styles.toolbarRow}>
            <div className={styles.categoryTabs}>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'all' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Pathways ({roadmapList.length})
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'sarkari' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('sarkari')}
              >
                Sarkari & Lok Sewa
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'tech_creative' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('tech_creative')}
              >
                Creative & UX
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'role' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('role')}
              >
                Software Engineering
              </button>
              <button 
                className={`${styles.tabBtn} ${activeCategory === 'skill' ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory('skill')}
              >
                Specialized Tools
              </button>
            </div>

            <div className={styles.levelFilter}>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className={styles.levelSelect}
              >
                <option value="all">All Difficulty Levels</option>
                <option value="beginner">Beginner Friendly</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced & Expert</option>
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
                  <span className={styles.difficultyBadge}>{roadmap.stats?.difficulty}</span>
                </div>
                <h4 className={styles.fullCardTitle}>{roadmap.title}</h4>
                <p className={styles.fullCardDesc}>{roadmap.description}</p>
                <div className={styles.fullCardMeta}>
                  <span>{roadmap.stats?.duration}</span>
                  <span>•</span>
                  <span>{roadmap.stats?.topics} Topics</span>
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
