import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import RoadmapView from './pages/RoadmapView';
import RoadmapCompare from './pages/RoadmapCompare';
import SearchPalette from './components/ui/SearchPalette';
import SkeletonLoader from './components/ui/SkeletonLoader';
import { roadmaps } from './data';
import { ProgressProvider } from './context/ProgressContext';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'roadmap' | 'compare'
  const [currentRoadmapId, setCurrentRoadmapId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPaletteOpen, setSearchPaletteOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      setIsLoading(true);
      const hash = window.location.hash;
      
      setTimeout(() => {
        if (hash === '#/compare') {
          setCurrentView('compare');
          setCurrentRoadmapId(null);
        } else if (hash.startsWith('#/roadmap/')) {
          const id = hash.replace('#/roadmap/', '');
          if (roadmaps[id]) {
            setCurrentView('roadmap');
            setCurrentRoadmapId(id);
          } else {
            setCurrentView('home');
            setCurrentRoadmapId(null);
          }
        } else {
          setCurrentView('home');
          setCurrentRoadmapId(null);
        }
        setIsLoading(false);
      }, 450); // Simulated delay for premium skeleton loader feedback
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut for command palette (/)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setSearchPaletteOpen(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectRoadmap = (roadmapId, nodeId = null) => {
    window.location.hash = `#/roadmap/${roadmapId}`;
    if (nodeId) {
      setTimeout(() => {
        const allNodeCards = document.querySelectorAll('button[class*="nodeCard"]');
        allNodeCards.forEach((btn) => {
          if (btn.outerHTML.includes(nodeId) || btn.textContent.includes(nodeId)) {
            btn.click();
          }
        });
      }, 600); // offset for loader delay
    }
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <ProgressProvider>
      <Header onSearchClick={() => setSearchPaletteOpen(true)} />
      
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
        <div className="container" style={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {isLoading ? (
            <div style={{ padding: '40px 0' }}>
              <SkeletonLoader type={currentView === 'roadmap' ? 'canvas' : 'card-list'} />
            </div>
          ) : (
            <>
              {currentView === 'roadmap' && (
                <RoadmapView 
                  roadmap={roadmaps[currentRoadmapId]} 
                  onBackToHome={handleBackToHome}
                />
              )}
              {currentView === 'compare' && (
                <RoadmapCompare onSelectRoadmap={handleSelectRoadmap} />
              )}
              {currentView === 'home' && (
                <Home onSelectRoadmap={handleSelectRoadmap} />
              )}
            </>
          )}
        </div>
      </main>

      <Footer />

      <SearchPalette 
        isOpen={searchPaletteOpen}
        onClose={() => setSearchPaletteOpen(false)}
        onSelectRoadmap={handleSelectRoadmap}
      />
    </ProgressProvider>
  );
}
