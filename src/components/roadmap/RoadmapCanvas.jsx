import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import Drawer from '../ui/Drawer';
import { CheckCircle2, Bookmark, Circle, Filter, SlidersHorizontal, CheckSquare, Search } from 'lucide-react';
import styles from './RoadmapCanvas.module.css';

export default function RoadmapCanvas({ roadmap }) {
  const { getNodeStatus, updateNodeStatus, getRoadmapProgressStats } = useProgress();
  const [selectedNode, setSelectedNode] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [hideOptional, setHideOptional] = useState(false);

  // Count total nodes
  const allNodes = roadmap.phases.flatMap((phase) => phase.nodes);
  const totalNodesCount = allNodes.length;
  
  // Progress stats
  const { percent, completed, inProgress } = getRoadmapProgressStats(roadmap.id, totalNodesCount);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleStatusChange = (nodeId, status) => {
    updateNodeStatus(roadmap.id, nodeId, status);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} className={styles.completedIcon} />;
      case 'in-progress':
        return <Bookmark size={16} className={styles.inProgressIcon} />;
      default:
        return <Circle size={16} className={styles.pendingIcon} />;
    }
  };

  return (
    <div className={styles.canvasContainer}>
      {/* Progress & Toolbar Panel */}
      <div className={`${styles.toolbar} glass-panel`}>
        <div className={styles.statsPanel}>
          <div className={styles.statItem}>
            <span className={styles.statVal}>{percent}%</span>
            <span className={styles.statLabel}>Completed</span>
          </div>
          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBar} style={{ width: `${percent}%` }} />
          </div>
          <div className={styles.statCounts}>
            <span>{completed} / {totalNodesCount} Learned</span>
            {inProgress > 0 && <span>• {inProgress} Learning</span>}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <Search size={16} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Filter topics..." 
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <button 
            className={`${styles.filterBtn} ${hideOptional ? styles.filterBtnActive : ''}`}
            onClick={() => setHideOptional(!hideOptional)}
          >
            <SlidersHorizontal size={16} />
            <span>{hideOptional ? 'Showing Critical' : 'Show All'}</span>
          </button>
        </div>
      </div>

      {/* Roadmap Tree Visualization */}
      <div className={styles.roadmapTree}>
        {roadmap.phases.map((phase, phaseIdx) => {
          // Filter phase nodes
          const filteredNodes = phase.nodes.filter(node => {
            const matchesSearch = node.label.toLowerCase().includes(filterText.toLowerCase()) ||
                                  node.description.toLowerCase().includes(filterText.toLowerCase());
            const matchesOptional = hideOptional ? node.importance === 'critical' : true;
            return matchesSearch && matchesOptional;
          });

          if (filteredNodes.length === 0) return null;

          return (
            <div key={phase.id} className={styles.phaseContainer}>
              {/* Phase Header */}
              <div className={styles.phaseHeader}>
                <div className={styles.phaseNumber}>0{phaseIdx + 1}</div>
                <div className={styles.phaseInfo}>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  <p className={styles.phaseDesc}>{phase.description}</p>
                </div>
              </div>

              {/* Grid of Nodes in Phase */}
              <div className={styles.nodesWrapper}>
                {filteredNodes.map((node, nodeIdx) => {
                  const status = getNodeStatus(roadmap.id, node.id);
                  const isMatch = filterText && node.label.toLowerCase().includes(filterText.toLowerCase());
                  
                  return (
                    <div key={node.id} className={styles.nodeAndConnector}>
                      {/* Connection Line */}
                      {nodeIdx > 0 && <div className={styles.connectorLine} />}
                      
                      <button
                        className={`${styles.nodeCard} ${styles[status]} ${node.importance === 'critical' ? styles.criticalBorder : ''} ${isMatch ? styles.highlightNode : ''}`}
                        onClick={() => handleNodeClick(node)}
                      >
                        <div className={styles.nodeHeader}>
                          {getStatusIcon(status)}
                          <span className={styles.nodeLabel}>{node.label}</span>
                        </div>
                        
                        <div className={styles.nodeFooter}>
                          <span className={`${styles.importanceIndicator} ${styles[node.importance]}`}>
                            {node.importance}
                          </span>
                          {node.resources && node.resources.length > 0 && (
                            <span className={styles.resourcesCount}>
                              {node.resources.length} resources
                            </span>
                          )}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sliding detail panel */}
      <Drawer
        isOpen={selectedNode !== null}
        onClose={() => setSelectedNode(null)}
        node={selectedNode}
        status={selectedNode ? getNodeStatus(roadmap.id, selectedNode.id) : 'unvisited'}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
