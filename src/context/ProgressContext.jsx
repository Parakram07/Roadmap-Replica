import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

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
      return saved || 'light';
    } catch (e) {
      return 'light';
    }
  });

  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('yojanamap_language');
      return saved || 'EN';
    } catch (e) {
      return 'EN';
    }
  });

  useEffect(() => {
    localStorage.setItem('roadmap_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('roadmap_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('yojanamap_language', language);
    document.documentElement.setAttribute('lang', language === 'NP' ? 'ne' : 'en');
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'NP' : 'EN'));
  };

  // Helper translation lookup function
  const t = (key) => {
    const dict = translations[language] || translations['EN'];
    return dict[key] || translations['EN'][key] || key;
  };

  // Helper function to get localized roadmap data
  const getLocalizedRoadmap = (roadmap) => {
    if (!roadmap) return null;
    const roadmapLocales = translations[language]?.roadmaps?.[roadmap.id] || translations['EN']?.roadmaps?.[roadmap.id];
    
    if (!roadmapLocales) return roadmap;

    return {
      ...roadmap,
      title: roadmapLocales.title || roadmap.title,
      tagline: roadmapLocales.tagline || roadmap.tagline,
      description: roadmapLocales.description || roadmap.description,
    };
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
      language,
      toggleTheme,
      toggleLanguage,
      setLanguage,
      t,
      getLocalizedRoadmap,
      updateNodeStatus,
      getNodeStatus,
      getRoadmapProgressStats,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
