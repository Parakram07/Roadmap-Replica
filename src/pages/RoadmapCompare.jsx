import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { roadmapList } from '../data';
import { ArrowRightLeft, DollarSign, Briefcase, Zap, ShieldAlert, Sparkles, BookOpen, Layers } from 'lucide-react';
import styles from './RoadmapCompare.module.css';

export default function RoadmapCompare({ onSelectRoadmap }) {
  const { language, t, getLocalizedRoadmap } = useProgress();
  const [leftPathId, setLeftPathId] = useState('loksewa');
  const [rightPathId, setRightPathId] = useState('frontend');

  const rawLeftPath = roadmapList.find(r => r.id === leftPathId);
  const rawRightPath = roadmapList.find(r => r.id === rightPathId);

  const leftPath = getLocalizedRoadmap(rawLeftPath);
  const rightPath = getLocalizedRoadmap(rawRightPath);

  // Mocked comparison metric databases for high fidelity values
  const pathMetrics = {
    loksewa: {
      salary: language === 'NP' ? 'रु. ४५,००० - ७०,००० / महिना' : 'NPR 45,000 - 70,000 / mo',
      demand: language === 'NP' ? 'अत्यधिक उच्च (स्थायी सरकारी सेवा)' : 'Very High (Permanent Civil Service)',
      difficulty: 'Advanced',
      primaryFocus: language === 'NP' ? 'निजामती प्रशासन, कानून, सामान्य ज्ञान, IQ र समसामयिक व्यवस्थापन।' : 'Civil service, law, GK, IQ, and contemporary governance.',
      languages: 'Nepali, English',
      tools: 'Gorkhapatra, RSS News, Nepal Law Commission, PSC Gazette',
      fundamentals: ['gk-nepal', 'iq-reasoning', 'governance-admin']
    },
    banking: {
      salary: language === 'NP' ? 'रु. ४०,००० - ८५,००० / महिना' : 'NPR 40,000 - 85,000 / mo',
      demand: language === 'NP' ? 'उच्च माग (क-वर्गका बैंक तथा NRB)' : 'High Demand (NRB & Class-A Banks)',
      difficulty: 'Intermediate',
      primaryFocus: language === 'NP' ? 'बैंकिङ कानून, वित्तीय लेखा, NRB निर्देशन र मौद्रिक नीति।' : 'Banking law, accounting, NRB directives, and monetary policy.',
      languages: 'English, Nepali',
      tools: 'NFRS, Balance Sheets, NRB Unified Directives',
      fundamentals: ['nrb-act', 'accounting-finance']
    },
    frontend: {
      salary: language === 'NP' ? 'रु. ५०,००० - २,५०,०००+ / महिना' : 'NPR 50,000 - 250,000+ / mo',
      demand: language === 'NP' ? 'अत्यधिक उच्च (रिमोट कार्य सम्भावना)' : 'Very High (Remote & Global Jobs)',
      difficulty: 'Intermediate',
      primaryFocus: language === 'NP' ? 'वेब प्रयोगकर्ता इन्टरफेस, रियाक्ट (React), CSS लेआउट र जाभास्क्रिप्ट।' : 'User interfaces, responsive CSS, React, and JavaScript ES6+.',
      languages: 'JavaScript, HTML, CSS, TypeScript',
      tools: 'Vite, Git, Chrome DevTools, React',
      fundamentals: ['internet', 'html-css-js', 'react-fundamentals']
    },
    backend: {
      salary: language === 'NP' ? 'रु. ६०,००० - ३,००,०००+ / महिना' : 'NPR 60,000 - 300,000+ / mo',
      demand: language === 'NP' ? 'अत्यधिक उच्च (सर्भर तथा डाटाबेस)' : 'Extremely High (Server & Databases)',
      difficulty: 'Advanced',
      primaryFocus: language === 'NP' ? 'सर्भर आर्किटेक्चर, API, रिलेसनल डाटाबेस र सेक्युरिटी।' : 'Server architecture, REST APIs, PostgreSQL DB, and sessions.',
      languages: 'Node.js, Python, SQL, TypeScript',
      tools: 'Express, PostgreSQL, Docker, Prisma',
      fundamentals: ['nodejs', 'relational-db']
    }
  };

  const defaultMetrics = {
    salary: language === 'NP' ? 'प्रतिस्पर्धी पारिश्रमिक' : 'Competitive Market Standard',
    demand: language === 'NP' ? 'उच्च बजार माग' : 'High Market Demand',
    difficulty: 'Intermediate',
    primaryFocus: language === 'NP' ? 'विशेषीकृत सीप तथा अभ्यास।' : 'Specialized core concepts and practical application.',
    languages: 'English',
    tools: 'Industry Standard Tools',
    fundamentals: []
  };

  const leftMetrics = pathMetrics[leftPathId] || defaultMetrics;
  const rightMetrics = pathMetrics[rightPathId] || defaultMetrics;

  const leftFundamentals = new Set(leftMetrics.fundamentals || []);
  const rightFundamentals = new Set(rightMetrics.fundamentals || []);
  const sharedOverlap = [...leftFundamentals].filter(x => rightFundamentals.has(x));

  return (
    <div className={styles.compareContainer}>
      
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.badgeLabel}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          <span>{t('compareTitle')}</span>
        </div>
        <h1 className={styles.title}>{t('compareTitle')}</h1>
        <p className={styles.subtitle}>{t('compareSubtitle')}</p>
      </section>

      {/* Selectors Bar */}
      <section className={`${styles.selectorsBar} glass-panel`}>
        <div className={styles.selectWrapper}>
          <label className={styles.label}>{t('selectPrimary')}</label>
          <select 
            value={leftPathId}
            onChange={(e) => setLeftPathId(e.target.value)}
            className={styles.dropdown}
          >
            {roadmapList.map(r => {
              const loc = getLocalizedRoadmap(r);
              return <option key={r.id} value={r.id}>{loc.title}</option>;
            })}
          </select>
        </div>

        <div className={styles.vsBadge}>
          <ArrowRightLeft size={18} />
          <span>VS</span>
        </div>

        <div className={styles.selectWrapper}>
          <label className={styles.label}>{t('selectSecondary')}</label>
          <select 
            value={rightPathId}
            onChange={(e) => setRightPathId(e.target.value)}
            className={styles.dropdown}
          >
            {roadmapList.map(r => {
              const loc = getLocalizedRoadmap(r);
              return <option key={r.id} value={r.id}>{loc.title}</option>;
            })}
          </select>
        </div>
      </section>

      {leftPathId === rightPathId ? (
        <div className={`${styles.alert} glass-panel`}>
          <ShieldAlert size={20} className={styles.alertIcon} />
          <span>Please select two different career paths to compare metrics!</span>
        </div>
      ) : (
        /* Comparison Dashboard Grid */
        <section className={styles.dashboard}>
          <div className={styles.comparisonGrid}>
            
            {/* Left Card */}
            <div className={`${styles.compareCard} glass-panel`}>
              <h3 className={styles.cardHeaderTitle}>{leftPath.title}</h3>
              <div className={styles.metricsList}>
                <div className={styles.metricRow}>
                  <DollarSign size={16} className={styles.metricIconBlue} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{leftMetrics.salary}</span>
                    <span className={styles.metricLabel}>Average Range</span>
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
                    <span className={styles.metricLabel}>{t('estimatedDuration')}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.focusSection}>
                <span className={styles.focusLabel}>Primary Focus</span>
                <p className={styles.focusDesc}>{leftMetrics.primaryFocus}</p>
              </div>

              <button className={styles.exploreBtn} onClick={() => onSelectRoadmap(leftPath.id)}>
                {t('openThisPath')}
              </button>
            </div>

            {/* Right Card */}
            <div className={`${styles.compareCard} glass-panel`}>
              <h3 className={styles.cardHeaderTitle}>{rightPath.title}</h3>
              <div className={styles.metricsList}>
                <div className={styles.metricRow}>
                  <DollarSign size={16} className={styles.metricIconBlue} />
                  <div className={styles.metricInfo}>
                    <span className={styles.metricValue}>{rightMetrics.salary}</span>
                    <span className={styles.metricLabel}>Average Range</span>
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
                    <span className={styles.metricLabel}>{t('estimatedDuration')}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.focusSection}>
                <span className={styles.focusLabel}>Primary Focus</span>
                <p className={styles.focusDesc}>{rightMetrics.primaryFocus}</p>
              </div>

              <button className={styles.exploreBtn} onClick={() => onSelectRoadmap(rightPath.id)}>
                {t('openThisPath')}
              </button>
            </div>

          </div>

          {/* Crossover Overlap Analysis */}
          <div className={`${styles.crossoverCard} glass-panel`}>
            <div className={styles.crossoverHeader}>
              <Layers size={20} className={styles.crossoverIcon} />
              <h3 className={styles.crossoverTitle}>{t('overlappingSkills')}</h3>
            </div>
            <p className={styles.crossoverDesc}>
              {language === 'NP' 
                ? `${leftPath.title} र ${rightPath.title} दुवैमा आवश्यक साझा आधारभूत सीपहरू:`
                : `Core fundamental skills shared between ${leftPath.title} and ${rightPath.title}:`}
            </p>

            <div className={styles.sharedTags}>
              {sharedOverlap.length > 0 ? (
                sharedOverlap.map(skill => (
                  <span key={skill} className={styles.skillPill}>
                    <BookOpen size={12} />
                    <span>{skill.toUpperCase()}</span>
                  </span>
                ))
              ) : (
                <span className={styles.noOverlap}>
                  {language === 'NP' ? 'अद्वितीय विशेषीकृत क्षेत्रहरू - साझा आधारभूत सीपहरू फरक छन्।' : 'Distinct specialized domains — fundamental prerequisites differ.'}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
