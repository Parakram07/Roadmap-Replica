import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { X, ExternalLink, Play, FileText, CheckCircle2, Bookmark, Circle, ChevronDown, Check, AlertTriangle, Lightbulb, Target, Wrench, AlertCircle } from 'lucide-react';
import styles from './Drawer.module.css';

export default function Drawer({ 
  isOpen, 
  onClose, 
  node, 
  status, 
  onStatusChange 
}) {
  const { language, t } = useProgress();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'knowledge' | 'interview' | 'practice'
  const [openQuestionIdx, setOpenQuestionIdx] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setOpenQuestionIdx(null);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, node]);

  if (!isOpen || !node) return null;

  const getImportanceBadge = (importance) => {
    switch (importance) {
      case 'critical':
        return <span className={`${styles.badge} ${styles.critical}`}>{language === 'NP' ? 'अति महत्वपूर्ण' : 'Critical Node'}</span>;
      case 'recommended':
        return <span className={`${styles.badge} ${styles.recommended}`}>{language === 'NP' ? 'सिफारिस गरिएको' : 'Recommended'}</span>;
      case 'optional':
        return <span className={`${styles.badge} ${styles.optional}`}>{language === 'NP' ? 'ऐच्छिक' : 'Optional'}</span>;
      default:
        return null;
    }
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video':
        return <Play size={16} className={styles.videoIcon} />;
      case 'article':
        return <FileText size={16} className={styles.articleIcon} />;
      default:
        return <ExternalLink size={16} className={styles.linkIcon} />;
    }
  };

  const toggleQuestion = (idx) => {
    setOpenQuestionIdx(openQuestionIdx === idx ? null : idx);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        ref={drawerRef}
        className={`${styles.drawer} glass-panel`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.badgeGroup}>
              {getImportanceBadge(node.importance)}
            </div>
            <h3 className={styles.nodeTitle}>{node.label}</h3>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close drawer">
            <X size={20} />
          </button>
        </div>

        {/* Status Tracker */}
        <div className={styles.statusSection}>
          <span className={styles.statusLabel}>{t('progress')}</span>
          <div className={styles.statusGroup}>
            <button 
              className={`${styles.statusBtn} ${status === 'unvisited' ? styles.activeStatus : ''}`}
              onClick={() => onStatusChange(node.id, 'unvisited')}
            >
              <Circle size={14} />
              <span>{t('markUnvisited')}</span>
            </button>
            <button 
              className={`${styles.statusBtn} ${styles.inProgressBtn} ${status === 'in-progress' ? styles.activeInProgress : ''}`}
              onClick={() => onStatusChange(node.id, 'in-progress')}
            >
              <Bookmark size={14} />
              <span>{t('markInProgress')}</span>
            </button>
            <button 
              className={`${styles.statusBtn} ${styles.completedBtn} ${status === 'completed' ? styles.activeCompleted : ''}`}
              onClick={() => onStatusChange(node.id, 'completed')}
            >
              <CheckCircle2 size={14} />
              <span>{t('markCompleted')}</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tabLink} ${activeTab === 'overview' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            {t('tabOverview')}
          </button>
          <button 
            className={`${styles.tabLink} ${activeTab === 'knowledge' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('knowledge')}
          >
            {t('tabKnowledge')}
          </button>
          {node.interview && node.interview.length > 0 && (
            <button 
              className={`${styles.tabLink} ${activeTab === 'interview' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('interview')}
            >
              {t('tabInterview')}
            </button>
          )}
          {node.project && (
            <button 
              className={`${styles.tabLink} ${activeTab === 'practice' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('practice')}
            >
              {t('tabPractice')}
            </button>
          )}
        </div>

        {/* Scrollable Tab Content */}
        <div className={styles.content}>
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className={styles.tabPanel}>
              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>{t('tabOverview')}</h4>
                <p className={styles.description}>{node.description}</p>
              </div>

              {node.tips && (
                <div className={`${styles.cardSection} ${styles.tipBox}`}>
                  <h4 className={styles.sectionTitle}><Lightbulb size={16} className={styles.accentIcon} /> {t('proTips')}</h4>
                  <p className={styles.description}>{node.tips}</p>
                </div>
              )}

              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>{t('tabKnowledge')}</h4>
                {node.resources && node.resources.length > 0 ? (
                  <div className={styles.resourceList}>
                    {node.resources.map((res, idx) => (
                      <a 
                        key={idx} 
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.resourceCard}
                      >
                        <div className={styles.resourceHeader}>
                          {getResourceIcon(res.type)}
                          <span className={styles.resourceTitle}>{res.title}</span>
                        </div>
                        <span className={styles.resourceType}>
                          {res.type === 'video' ? 'Video Tutorial' : res.type === 'article' ? 'Article & Docs' : 'Official Portal'}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className={styles.noData}>Recommended resources available online.</p>
                )}
              </div>
            </div>
          )}

          {/* KNOWLEDGE TREE TAB */}
          {activeTab === 'knowledge' && (
            <div className={styles.tabPanel}>
              {/* Learning Objectives */}
              {node.objectives && node.objectives.length > 0 && (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><Target size={16} className={styles.accentIcon} /> {t('objectives')}</h4>
                  <ul className={styles.objectivesList}>
                    {node.objectives.map((obj, idx) => (
                      <li key={idx}>
                        <Check size={14} className={styles.checkBullet} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Best Practices */}
              {node.bestPractices && node.bestPractices.length > 0 && (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><Wrench size={16} className={styles.accentIcon} /> {t('bestPractices')}</h4>
                  <ul className={styles.bestPracticesList}>
                    {node.bestPractices.map((bp, idx) => (
                      <li key={idx}>{bp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mistakes */}
              {node.mistakes && node.mistakes.length > 0 && (
                <div className={`${styles.cardSection} ${styles.warningBox}`}>
                  <h4 className={styles.sectionTitle}><AlertTriangle size={16} className={styles.warningIcon} /> {t('commonMistakes')}</h4>
                  <ul className={styles.mistakesList}>
                    {node.mistakes.map((mst, idx) => (
                      <li key={idx}>{mst}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* INTERVIEW PREP TAB */}
          {activeTab === 'interview' && node.interview && (
            <div className={styles.tabPanel}>
              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>{t('interviewQuestions')}</h4>
                <div className={styles.accordionList}>
                  {node.interview.map((item, idx) => (
                    <div key={idx} className={styles.accordionItem}>
                      <button 
                        className={styles.accordionHeader}
                        onClick={() => toggleQuestion(idx)}
                      >
                        <span className={styles.questionText}>Q: {item.q}</span>
                        <ChevronDown 
                          size={18} 
                          className={`${styles.chevron} ${openQuestionIdx === idx ? styles.chevronOpen : ''}`} 
                        />
                      </button>
                      {openQuestionIdx === idx && (
                        <div className={styles.accordionBody}>
                          <p className={styles.answerText}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PRACTICE TAB */}
          {activeTab === 'practice' && node.project && (
            <div className={styles.tabPanel}>
              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>{t('recommendedProject')}</h4>
                <div className={styles.projectCard}>
                  <h5 className={styles.projectName}>{node.project.name}</h5>
                  <p className={styles.projectDesc}>{node.project.desc}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
