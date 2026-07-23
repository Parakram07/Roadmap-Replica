import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Sun, Moon, Search, Globe, ArrowRightLeft, User } from 'lucide-react';
import AuthModal from './AuthModal';
import styles from './Header.module.css';

export default function Header({ onSearchClick }) {
  const { theme, toggleTheme } = useProgress();
  const [lang, setLang] = useState('EN'); // 'EN' | 'NP'
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'NP' : 'EN'));
  };

  return (
    <>
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.container}>
          {/* Logo Group */}
          <div className={styles.logoGroup}>
            <a href="/" className={styles.logoLink}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                  <path d="M10 13v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8" />
                  <path d="M14 13v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
                  <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className={styles.logoText}>
                Yojana<span className={styles.logoHighlight}>Map</span>
              </span>
            </a>
          </div>

          {/* Central Header Search Bar (matching screenshot) */}
          <div className={styles.centerSearchWrapper} onClick={onSearchClick}>
            <Search size={16} className={styles.searchIcon} />
            <input 
              type="text" 
              readOnly
              placeholder={lang === 'EN' ? "Search careers, skills, Lok Sewa..." : "पेशाहरू, सीपहरू, लोक सेवा खोज्नुहोस्..."} 
              className={styles.centerSearchInput}
            />
            <kbd className={styles.kbd}>/</kbd>
          </div>

          {/* Right Header Actions */}
          <div className={styles.actions}>
            <a href="#/compare" className={styles.compareBtn} title="Compare Paths">
              <ArrowRightLeft size={16} />
              <span className={styles.compareText}>Compare</span>
            </a>

            {/* Language Switcher Button (EN / नेपाली) */}
            <button 
              className={styles.langToggleBtn} 
              onClick={toggleLanguage} 
              title="Toggle Language"
            >
              <Globe size={16} />
              <span className={styles.langLabel}>
                {lang === 'EN' ? 'EN / नेपाली' : 'नेपाली / EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button 
              className={styles.themeToggle} 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Sign in Button */}
            <button 
              className={styles.signInBtn}
              onClick={() => setAuthModalOpen(true)}
            >
              <User size={16} />
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </>
  );
}
