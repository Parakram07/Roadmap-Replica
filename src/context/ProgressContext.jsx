import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  // Structure: { [roadmapId]: { [nodeId]: 'completed' | 'in-progress' } }
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('roadmap_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to parse roadmap progress from localStorage', e);
      return {};
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('roadmap_theme');
      return saved || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    localStorage.setItem('roadmap_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('roadmap_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updateNodeStatus = (roadmapId, nodeId, status) => {
    setProgress((prevProgress) => {
      const roadmapProgress = { ...(prevProgress[roadmapId] || {}) };
      
      if (!status || status === 'unvisited') {
        delete roadmapProgress[nodeId];
      } else {
        roadmapProgress[nodeId] = status;
      }

      return {
        ...prevProgress,
        [roadmapId]: roadmapProgress,
      };
    });
  };

  const getRoadmapProgressStats = (roadmapId, totalNodesCount) => {
    if (!totalNodesCount || totalNodesCount === 0) return { percent: 0, completed: 0, inProgress: 0 };
    
    const roadmapProgress = progress[roadmapId] || {};
    let completed = 0;
    let inProgress = 0;

    Object.values(roadmapProgress).forEach((status) => {
      if (status === 'completed') completed++;
      if (status === 'in-progress') inProgress++;
    });

    const percent = Math.round((completed / totalNodesCount) * 100);
    return {
      percent,
      completed,
      inProgress,
    };
  };

  const getNodeStatus = (roadmapId, nodeId) => {
    return progress[roadmapId]?.[nodeId] || 'unvisited';
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      theme,
      toggleTheme,
      updateNodeStatus,
      getNodeStatus,
      getRoadmapProgressStats,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
