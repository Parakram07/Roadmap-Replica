import React, { useState } from 'react';
import { roadmapList } from '../data';
import { Layout, Server, GitBranch, Atom, GitPullRequest, Search, Compass, BookOpen, Users, Trophy, Award, ArrowRight, Star, TrendingUp, Cpu, CheckSquare, Sparkles, BookOpenCheck, Lock, Layers, Smartphone, Shield, LineChart, Box, Code } from 'lucide-react';
import styles from './Home.module.css';

export default function Home({ onSelectRoadmap }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'role' | 'skill'
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced'

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={24} className={styles.roleIcon} />;
      case 'Server':
        return <Server size={24} className={styles.roleIcon} />;
      case 'GitBranch':
        return <GitBranch size={24} className={styles.roleIcon} />;
      case 'Layers':
        return <Layers size={24} className={styles.roleIcon} />;
      case 'Smartphone':
        return <Smartphone size={24} className={styles.roleIcon} />;
      case 'Shield':
        return <Shield size={24} className={styles.roleIcon} />;
      case 'LineChart':
        return <LineChart size={24} className={styles.roleIcon} />;
      case 'Atom':
        return <Atom size={24} className={styles.skillIcon} />;
      case 'GitPullRequest':
        return <GitPullRequest size={24} className={styles.skillIcon} />;
      case 'Cpu':
        return <Cpu size={24} className={styles.skillIcon} />;
      case 'Box':
        return <Box size={24} className={styles.skillIcon} />;
      case 'Code':
        return <Code size={24} className={styles.skillIcon} />;
      default:
        return <Compass size={24} />;
    }
  };

  // Filter roadmaps based on Search, Category Tab, AND Experience Level
  const filteredRoadmaps = roadmapList.filter((roadmap) => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          roadmap.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'all' ? true : roadmap.category === activeTab;
    
    let matchesLevel = true;
    if (selectedLevel !== 'all') {
      const difficulty = roadmap.stats?.difficulty.toLowerCase();
      if (selectedLevel === 'beginner') {
        matchesLevel = difficulty === 'beginner';
      } else if (selectedLevel === 'intermediate') {
        matchesLevel = difficulty === 'intermediate';
      } else if (selectedLevel === 'advanced') {
        matchesLevel = difficulty === 'advanced' || difficulty === 'expert';
      }
    }
    
    return matchesSearch && matchesTab && matchesLevel;
  });

  const trendingTech = [
    { name: 'Next.js 15', category: 'Framework', status: 'Hot', growth: '+38%' },
    { name: 'Vite 6', category: 'Build Tool', status: 'Updated', growth: '+45%' },
    { name: 'Zustand Store', category: 'State Management', status: 'Popular', growth: '+52%' },
    { name: 'TypeScript 5.x', category: 'Language', status: 'Essential', growth: '+29%' },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Frontend Engineer at Vercel',
      text: 'Following the Frontend path saved me months of tutorial hell. The visual structure of prerequisites helped me understand WHAT to learn, not just HOW.',
      avatarBg: '#6366f1'
    },
    {
      name: 'Marcus Chen',
      role: 'Site Reliability Engineer at AWS',
      text: 'The DevOps roadmap is exceptionally accurate. It bridges the gap between basic coding and complex container orchestration concepts seamlessly.',
      avatarBg: '#8b5cf6'
    }
  ];

  return (
    <div className={styles.homeContainer}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.badgeLabel}>
          <Sparkles size={12} />
          <span>Next-Generation Technical Guidance</span>
        </div>
        <h1 className={`${styles.heroTitle} gradient-text`}>
          Navigate Your Engineering Career
        </h1>
        <p className={styles.heroSubtitle}>
          Skip the tutorial hell. Follow interactive, structured, peer-approved learning pathways covering frontend systems, backend services, and DevOps networks.
        </p>

        {/* Global Interactive Search Hub */}
        <div className={`${styles.searchHub} glass-panel`}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search roles, frameworks, or specific tools (e.g., React, Git)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </section>

      {/* Grid Dashboard: Stats & Trending Tech */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardGrid}>
          {/* Platform Stats */}
          <div className={styles.statsColumn}>
            <div className={styles.statsGrid}>
              <div className={`${styles.statCard} glass-panel`}>
                <Users className={styles.statIconBlue} size={24} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>120,400+</span>
                  <span className={styles.statDesc}>Learners Worldwide</span>
                </div>
              </div>
              <div className={`${styles.statCard} glass-panel`}>
                <Trophy className={styles.statIconGreen} size={24} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>94.2%</span>
                  <span className={styles.statDesc}>Completion Satisfaction</span>
                </div>
              </div>
              <div className={`${styles.statCard} glass-panel`}>
                <Award className={styles.statIconPurple} size={24} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>Active Updates</span>
                  <span className={styles.statDesc}>Refreshed for 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Tech Radar */}
          <div className={`${styles.radarCard} glass-panel`}>
            <div className={styles.radarHeader}>
              <TrendingUp size={18} className={styles.radarIcon} />
              <h3 className={styles.radarTitle}>Technology Radar</h3>
            </div>
            <div className={styles.radarList}>
              {trendingTech.map((tech, idx) => (
                <div key={idx} className={styles.radarItem}>
                  <div className={styles.radarItemInfo}>
                    <span className={styles.radarItemName}>{tech.name}</span>
                    <span className={styles.radarItemCat}>{tech.category}</span>
                  </div>
                  <div className={styles.radarItemStats}>
                    <span className={styles.radarGrowth}>{tech.growth}</span>
                    <span className={`${styles.radarStatus} ${styles[tech.status.toLowerCase()]}`}>
                      {tech.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Track Filter & Catalog */}
      <section className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <div className={styles.catalogTitleArea}>
            <h2 className={styles.catalogTitle}>Curated Roadmaps</h2>
            <p className={styles.catalogSubtitle}>Choose your destination and start checking off topics.</p>
          </div>

          {/* Combined Filters Toolbar */}
          <div className={styles.filterToolbar}>
            {/* Category Tabs */}
            <div className={styles.tabList}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Paths
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'role' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('role')}
              >
                Developer Roles
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'skill' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('skill')}
              >
                Skills
              </button>
            </div>

            {/* Experience Level Filters */}
            <div className={styles.levelFilterList}>
              <button 
                className={`${styles.levelBtn} ${selectedLevel === 'all' ? styles.levelBtnActive : ''}`}
                onClick={() => setSelectedLevel('all')}
              >
                All Levels
              </button>
              <button 
                className={`${styles.levelBtn} ${selectedLevel === 'beginner' ? styles.levelBtnActive : ''}`}
                onClick={() => setSelectedLevel('beginner')}
              >
                Beginner
              </button>
              <button 
                className={`${styles.levelBtn} ${selectedLevel === 'intermediate' ? styles.levelBtnActive : ''}`}
                onClick={() => setSelectedLevel('intermediate')}
              >
                Associate
              </button>
              <button 
                className={`${styles.levelBtn} ${selectedLevel === 'advanced' ? styles.levelBtnActive : ''}`}
                onClick={() => setSelectedLevel('advanced')}
              >
                Expert
              </button>
            </div>
          </div>
        </div>

        {/* Roadmap Cards Grid */}
        <div className={styles.cardsGrid}>
          {filteredRoadmaps.length > 0 ? (
            filteredRoadmaps.map((roadmap) => (
              <div 
                key={roadmap.id} 
                className={`${styles.roadmapCard} glass-panel`}
                onClick={() => onSelectRoadmap(roadmap.id)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {getIcon(roadmap.icon)}
                  </div>
                  <span className={`${styles.categoryBadge} ${styles[roadmap.category]}`}>
                    {roadmap.category === 'role' ? 'Role-Based' : 'Skill-Based'}
                  </span>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{roadmap.title}</h3>
                  <p className={styles.cardDesc}>{roadmap.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.metaInfo}>
                    <span>{roadmap.stats?.duration}</span>
                    <span>•</span>
                    <span className={styles.difficultyVal}>{roadmap.stats?.difficulty}</span>
                  </div>
                  <div className={styles.exploreLink}>
                    <span>Start Path</span>
                    <ArrowRight size={14} className={styles.arrowIcon} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No learning path found matching your filters. Try adjusting your search query or level filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning Methodology Explainer */}
      <section className={`${styles.methodology} glass-panel`}>
        <div className={styles.methodologyContent}>
          <div className={styles.badgeLabel}>
            <BookOpenCheck size={12} />
            <span>Pathify Learning Methodology</span>
          </div>
          <h2 className={styles.methodologyTitle}>Why Structured Paths Work</h2>
          <p className={styles.methodologyDesc}>
            Scattered tutorials explain specific steps, but they fail to establish a roadmap. Pathify structures technical learning using a goal-first curriculum model:
          </p>
          <div className={styles.methodologySteps}>
            <div className={styles.methodologyStepItem}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepInfo}>
                <span className={styles.stepTitle}>Prerequisite-First Sequencing</span>
                <p className={styles.stepDesc}>Understand how variables feed modules and how databases feed API endpoints. Master dependencies in logical order.</p>
              </div>
            </div>
            <div className={styles.methodologyStepItem}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepInfo}>
                <span className={styles.stepTitle}>Importance Mapping</span>
                <p className={styles.stepDesc}>Roadmap items are labeled critical or optional. Focus on core architectural foundations before studying secondary utilities.</p>
              </div>
            </div>
            <div className={styles.methodologyStepItem}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepInfo}>
                <span className={styles.stepTitle}>Mock-Interview Checkpoints</span>
                <p className={styles.stepDesc}>Verify your knowledge. Review typical interview prep questions and implementation assignments after completing sections.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic teaser simulation */}
        <div className={styles.methodologyVisual}>
          <div className={styles.methodologyFlowCard}>
            <span className={styles.flowCardTitle}>Learning Pipeline</span>
            <div className={styles.teaserFlow}>
              <div className={`${styles.teaserNode} ${styles.teaserDone}`}>
                <CheckSquare size={14} />
                <span>Internet protocols</span>
              </div>
              <div className={styles.teaserLink} />
              <div className={`${styles.teaserNode} ${styles.teaserActive}`}>
                <div className={styles.pulseDot} />
                <span>HTML & CSS structure</span>
              </div>
              <div className={styles.teaserLink} />
              <div className={`${styles.teaserNode} ${styles.teaserLocked}`}>
                <span>Modern JavaScript</span>
                <Lock size={12} className={styles.lockIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Testimonials & Quotes */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsSectionTitle}>Learner Success Stories</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={`${styles.testimonialCard} glass-panel`}>
              <div className={styles.testimonialHeader}>
                <div className={styles.avatar} style={{ backgroundColor: t.avatarBg }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={styles.testimonialUser}>
                  <span className={styles.userName}>{t.name}</span>
                  <span className={styles.userRole}>{t.role}</span>
                </div>
              </div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.stars}>
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
