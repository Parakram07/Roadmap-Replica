import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { roadmapList } from '../../data';
import { Search, X, Compass, CornerDownLeft, Sparkles, Terminal } from 'lucide-react';
import styles from './SearchPalette.module.css';

export default function SearchPalette({ isOpen, onClose, onSelectRoadmap }) {
  const { language, t, getLocalizedRoadmap } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearchQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const localizedRoadmaps = roadmapList.map(r => getLocalizedRoadmap(r));

  // Extract all nodes from all roadmaps to make them searchable globally
  const globalNodes = [];
  localizedRoadmaps.forEach((roadmap) => {
    roadmap.phases.forEach((phase) => {
      phase.nodes.forEach((node) => {
        globalNodes.push({
          ...node,
          roadmapId: roadmap.id,
          roadmapTitle: roadmap.title,
          phaseTitle: phase.title
        });
      });
    });
  });

  // Filter roadmaps and nodes based on search query
  const matchingRoadmaps = searchQuery 
    ? localizedRoadmaps.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : localizedRoadmaps.slice(0, 4);

  const matchingNodes = searchQuery 
    ? globalNodes.filter(n => n.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              n.description.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const combinedResults = [
    ...matchingRoadmaps.map(r => ({ ...r, resultType: 'roadmap' })),
    ...matchingNodes.map(n => ({ ...n, resultType: 'node' }))
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, combinedResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + combinedResults.length) % Math.max(1, combinedResults.length));
    } else if (e.key === 'Enter' && combinedResults[selectedIndex]) {
      e.preventDefault();
      const item = combinedResults[selectedIndex];
      if (item.resultType === 'roadmap') {
        onSelectRoadmap(item.id);
      } else {
        onSelectRoadmap(item.roadmapId, item.id);
      }
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.palette} glass-panel`} onClick={(e) => e.stopPropagation()}>
        {/* Input Bar */}
        <div className={styles.inputBar}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            ref={inputRef}
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
          />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className={styles.resultsContainer}>
          {combinedResults.length === 0 ? (
            <div className={styles.emptyState}>
              <p>{language === 'NP' ? 'कुनै नतिजा भेटिएन।' : 'No matching roadmaps or topics found.'}</p>
            </div>
          ) : (
            <div className={styles.resultsList}>
              {matchingRoadmaps.length > 0 && (
                <div className={styles.sectionHeader}>
                  <Compass size={14} />
                  <span>{language === 'NP' ? 'सिफारिस गरिएका रोडम्यापहरु' : 'Matching Roadmaps'}</span>
                </div>
              )}

              {combinedResults.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                if (item.resultType === 'roadmap') {
                  return (
                    <div 
                      key={`roadmap-${item.id}`}
                      className={`${styles.resultCard} ${isSelected ? styles.selectedCard : ''}`}
                      onClick={() => {
                        onSelectRoadmap(item.id);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className={styles.resultMeta}>
                        <h4 className={styles.resultTitle}>{item.title}</h4>
                        <p className={styles.resultDesc}>{item.description}</p>
                      </div>
                      <CornerDownLeft size={16} className={styles.enterIcon} />
                    </div>
                  );
                } else {
                  return (
                    <div 
                      key={`node-${item.id}`}
                      className={`${styles.resultCard} ${isSelected ? styles.selectedCard : ''}`}
                      onClick={() => {
                        onSelectRoadmap(item.roadmapId, item.id);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className={styles.resultMeta}>
                        <div className={styles.nodePathGroup}>
                          <Terminal size={14} className={styles.nodeIcon} />
                          <span className={styles.roadmapTag}>{item.roadmapTitle}</span>
                        </div>
                        <h4 className={styles.resultTitle}>{item.label}</h4>
                        <p className={styles.resultDesc}>{item.description}</p>
                      </div>
                      <CornerDownLeft size={16} className={styles.enterIcon} />
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className={styles.footerBar}>
          <div className={styles.shortcut}>
            <kbd>↑</kbd> <kbd>↓</kbd> <span>to navigate</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>↵</kbd> <span>to select</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>esc</kbd> <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
