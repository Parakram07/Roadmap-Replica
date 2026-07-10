import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Play, FileText, CheckCircle2, Bookmark, Circle, ChevronDown, Check, AlertTriangle, Lightbulb, Target, Wrench, AlertCircle } from 'lucide-react';
import styles from './Drawer.module.css';

export default function Drawer({ 
  isOpen, 
  onClose, 
  node, 
  status, 
  onStatusChange 
}) {
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
        return <span className={`${styles.badge} ${styles.critical}`}>Critical Node</span>;
      case 'recommended':
        return <span className={`${styles.badge} ${styles.recommended}`}>Recommended</span>;
      case 'optional':
        return <span className={`${styles.badge} ${styles.optional}`}>Optional</span>;
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
        className={`${styles.drawer} glass-panel`} 
        onClick={(e) => e.stopPropagation()}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Drawer Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            {getImportanceBadge(node.importance)}
            <h3 id="drawer-title" className={styles.title}>{node.label}</h3>
          </div>
          <button 
            className={styles.closeBtn} 
            onClick={onClose} 
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Status Tracker */}
        <div className={styles.statusSection}>
          <span className={styles.statusLabel}>My Progress</span>
          <div className={styles.statusGroup}>
            <button 
              className={`${styles.statusBtn} ${status === 'unvisited' ? styles.activeStatus : ''}`}
              onClick={() => onStatusChange(node.id, 'unvisited')}
            >
              <Circle size={14} />
              <span>To Learn</span>
            </button>
            <button 
              className={`${styles.statusBtn} ${styles.inProgressBtn} ${status === 'in-progress' ? styles.activeInProgress : ''}`}
              onClick={() => onStatusChange(node.id, 'in-progress')}
            >
              <Bookmark size={14} />
              <span>Learning</span>
            </button>
            <button 
              className={`${styles.statusBtn} ${styles.completedBtn} ${status === 'completed' ? styles.activeCompleted : ''}`}
              onClick={() => onStatusChange(node.id, 'completed')}
            >
              <CheckCircle2 size={14} />
              <span>Learned</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tabLink} ${activeTab === 'overview' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tabLink} ${activeTab === 'knowledge' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('knowledge')}
          >
            Knowledge Tree
          </button>
          {node.interview && node.interview.length > 0 && (
            <button 
              className={`${styles.tabLink} ${activeTab === 'interview' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('interview')}
            >
              Interview Prep
            </button>
          )}
          {node.project && (
            <button 
              className={`${styles.tabLink} ${activeTab === 'practice' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('practice')}
            >
              Practice
            </button>
          )}
        </div>

        {/* Scrollable Tab Content */}
        <div className={styles.content}>
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className={styles.tabPanel}>
              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>Overview</h4>
                <p className={styles.description}>{node.description}</p>
              </div>

              {node.tips && (
                <div className={`${styles.cardSection} ${styles.tipBox}`}>
                  <h4 className={styles.sectionTitle}><Lightbulb size={16} className={styles.accentIcon} /> Architect Notes</h4>
                  <p className={styles.description}>{node.tips}</p>
                </div>
              )}

              <div className={styles.cardSection}>
                <h4 className={styles.sectionTitle}>Vetted Resources</h4>
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
                          {res.type === 'video' ? 'Video Tutorial' : res.type === 'article' ? 'Technical Article' : 'Official Docs'}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className={styles.noData}>No specific resources available. Check MDN Web Docs or Google for this topic!</p>
                )}
              </div>
            </div>
          )}

          {/* KNOWLEDGE TREE TAB */}
          {activeTab === 'knowledge' && (
            <div className={styles.tabPanel}>
              {/* Learning Objectives */}
              {node.objectives && node.objectives.length > 0 ? (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><Target size={16} className={styles.accentIcon} /> Learning Objectives</h4>
                  <ul className={styles.objectivesList}>
                    {node.objectives.map((obj, idx) => (
                      <li key={idx}>
                        <Check size={14} className={styles.bulletGreen} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><Target size={16} className={styles.accentIcon} /> Learning Objectives</h4>
                  <p className={styles.noData}>Master the core components, layout patterns, and usage of this technology as detailed in the overview.</p>
                </div>
              )}

              {/* Best Practices */}
              {node.bestPractices && node.bestPractices.length > 0 && (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><Check size={16} className={styles.accentIcon} /> Industry Best Practices</h4>
                  <ul className={styles.bestPracticesList}>
                    {node.bestPractices.map((practice, idx) => (
                      <li key={idx}>
                        <div className={styles.bulletDotGreen} />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Mistakes */}
              {node.mistakes && node.mistakes.length > 0 && (
                <div className={styles.cardSection}>
                  <h4 className={styles.sectionTitle}><AlertTriangle size={16} className={styles.accentIcon} /> Common Pitfalls</h4>
                  <ul className={styles.mistakesList}>
                    {node.mistakes.map((mistake, idx) => (
                      <li key={idx}>
                        <AlertCircle size={14} className={styles.bulletRed} />
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* INTERVIEW PREP TAB */}
          {activeTab === 'interview' && node.interview && (
            <div className={styles.tabPanel}>
              <h4 className={styles.sectionTitle}>Mock Interview Questions</h4>
              <div className={styles.accordionList}>
                {node.interview.map((item, idx) => {
                  const isOpen = openQuestionIdx === idx;
                  return (
                    <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}>
                      <button 
                        className={styles.accordionHeader} 
                        onClick={() => toggleQuestion(idx)}
                      >
                        <span className={styles.accordionQuestion}>{item.q}</span>
                        <ChevronDown size={16} className={styles.accordionChevron} />
                      </button>
                      
                      <div className={styles.accordionBody}>
                        <p className={styles.accordionAnswer}>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PRACTICE SANDBOX TAB */}
          {activeTab === 'practice' && node.project && (
            <div className={styles.tabPanel}>
              <div className={`${styles.cardSection} ${styles.projectCard}`}>
                <div className={styles.projectHeader}>
                  <Wrench size={20} className={styles.projectIcon} />
                  <h4 className={styles.projectTitle}>{node.project.name}</h4>
                </div>
                <p className={styles.projectDesc}>{node.project.desc}</p>
                <div className={styles.projectSteps}>
                  <span className={styles.stepsTitle}>Implementation Requirements:</span>
                  <ul className={styles.stepsList}>
                    <li>Apply semantic patterns and design system boundaries.</li>
                    <li>Configure tests to cover logical success and failure paths.</li>
                    <li>Avoid hardcoded secrets; load variables dynamically.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
