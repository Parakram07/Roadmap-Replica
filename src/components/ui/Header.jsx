import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Sun, Moon, Search, Compass, BookOpen, User, Github, ArrowRightLeft } from 'lucide-react';
import styles from './Header.module.css';

export default function Header({ onSearchClick }) {
  const { theme, toggleTheme } = useProgress();

  return (
    <header className={`${styles.header} glass-panel`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M10 13v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8" />
                <path d="M14 13v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
                <circle cx="12" cy="8" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <a href="/" className={styles.logoText}>
              Pathify<span className={styles.logoDot}>.</span>
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="#/compare" className={styles.navLink}>
              <ArrowRightLeft size={16} />
              <span>Compare Paths</span>
            </a>
          </nav>
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.searchBtn} 
            onClick={onSearchClick} 
            aria-label="Search roadmaps"
            title="Search (Press /)"
          >
            <Search size={18} />
            <span className={styles.searchPlaceholder}>Search tracks...</span>
            <kbd className={styles.kbd}>/</kbd>
          </button>

          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.githubLink}
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
