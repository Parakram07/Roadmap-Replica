import React, { useState, useEffect, useRef } from 'react';
import { roadmapList } from '../../data';
import { Search, X, Compass, CornerDownLeft, Sparkles, Terminal } from 'lucide-react';
import styles from './SearchPalette.module.css';

export default function SearchPalette({ isOpen, onClose, onSelectRoadmap }) {
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

  // Extract all nodes from all roadmaps to make them searchable globally
  const globalNodes = [];
  roadmapList.forEach((roadmap) => {
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
    ? roadmapList.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : roadmapList.slice(0, 3); // show popular roadmaps initially

  const matchingNodes = searchQuery 
    ? globalNodes.filter(n => n.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              n.description.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const combinedResults = [
    ...matchingRoadmaps.map(r => ({ type: 'roadmap', id: r.id, title: r.title, category: r.category })),
    ...matchingNodes.map(n => ({ type: 'node', id: n.id, title: n.label, roadmapId: n.roadmapId, roadmapTitle: n.roadmapTitle }))
  ];

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(combinedResults.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + combinedResults.length) % Math.max(combinedResults.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (combinedResults[selectedIndex]) {
          handleResultClick(combinedResults[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, combinedResults]);

  const handleResultClick = (result) => {
    if (result.type === 'roadmap') {
      onSelectRoadmap(result.id);
    } else {
      // Directs to roadmap and will store the nodeId to open immediately. We can pass a callback
      onSelectRoadmap(result.roadmapId, result.id);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.palette} glass-panel`}
        onClick={(e) => e.stopPropagation()}
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
      >
        <div className={styles.searchHeader}>
          <Search size={20} className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search roadmaps, skills, and topics..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className={styles.searchInput}
          />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className={styles.resultsArea} role="listbox">
          {/* Roadmaps group */}
          {matchingRoadmaps.length > 0 && (
            <div className={styles.group}>
              <span className={styles.groupTitle}>Learning Channels</span>
              {matchingRoadmaps.map((roadmap, idx) => {
                const combinedIdx = idx;
                const isSelected = combinedIdx === selectedIndex;
                return (
                  <div
                    key={roadmap.id}
                    className={`${styles.resultRow} ${isSelected ? styles.selectedRow : ''}`}
                    onClick={() => handleResultClick({ type: 'roadmap', id: roadmap.id })}
                    onMouseEnter={() => setSelectedIndex(combinedIdx)}
                  >
                    <Compass size={16} className={styles.rowIconBlue} />
                    <div className={styles.rowDetails}>
                      <span className={styles.rowTitle}>{roadmap.title} Path</span>
                      <span className={styles.rowSub}>{roadmap.category === 'role' ? 'Role-Based Pathway' : 'Skill Tree'}</span>
                    </div>
                    {isSelected && <span className={styles.enterHint}><CornerDownLeft size={10} /> Enter</span>}
                  </div>
                );
              })}
            </div>
          )}

          {/* Nodes group */}
          {matchingNodes.length > 0 && (
            <div className={styles.group}>
              <span className={styles.groupTitle}>Individual Topics</span>
              {matchingNodes.map((node, idx) => {
                const combinedIdx = matchingRoadmaps.length + idx;
                const isSelected = combinedIdx === selectedIndex;
                return (
                  <div
                    key={node.id}
                    className={`${styles.resultRow} ${isSelected ? styles.selectedRow : ''}`}
                    onClick={() => handleResultClick({ 
                      type: 'node', 
                      id: node.id, 
                      roadmapId: node.roadmapId 
                    })}
                    onMouseEnter={() => setSelectedIndex(combinedIdx)}
                  >
                    <Terminal size={16} className={styles.rowIconPurple} />
                    <div className={styles.rowDetails}>
                      <span className={styles.rowTitle}>{node.label}</span>
                      <span className={styles.rowSub}>Found in {node.roadmapTitle} • {node.phaseTitle}</span>
                    </div>
                    {isSelected && <span className={styles.enterHint}><CornerDownLeft size={10} /> Enter</span>}
                  </div>
                );
              })}
            </div>
          )}

          {combinedResults.length === 0 && (
            <div className={styles.emptyState}>
              <Sparkles size={32} className={styles.emptyIcon} />
              <p className={styles.emptyText}>No results found for "{searchQuery}"</p>
              <span className={styles.emptySub}>Try searching for tags like "react", "git", "internet", or "docker"</span>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.shortcuts}>
            <span><kbd>↑↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>esc</kbd> Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
