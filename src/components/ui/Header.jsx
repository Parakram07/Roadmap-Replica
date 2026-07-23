import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Search, Globe, ArrowRightLeft, User } from 'lucide-react';
import AuthModal from './AuthModal';
import styles from './Header.module.css';

export default function Header({ onSearchClick }) {
  const { language, toggleLanguage, t } = useProgress();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.container}>
          {/* Logo Group */}
          <div className={styles.logoGroup}>
            <a href="/" className={styles.logoLink}>
              <div className={styles.logoIconContainer}>
                {/* Brand Board Emblem: Green Y with Warm Coral Rocket Arrow Tip */}
                <svg viewBox="0 0 36 36" fill="none" className={styles.brandEmblemSvg}>
                  <rect x="15" y="18" width="6" height="14" rx="3" fill="#3D5A1E" />
                  <path d="M16 20L6 8C5.2 7 6 5.5 7.2 5.5H11C12 5.5 12.8 6 13.4 6.8L18 13.5L16 20Z" fill="#6B9A38" />
                  <path d="M20 20L30 8C30.8 7 30 5.5 28.8 5.5H25C24 5.5 23.2 6 22.6 6.8L18 13.5L20 20Z" fill="#3D5A1E" />
                  <path d="M26 4L32 5.5L30.5 11.5L28.5 8.5L26 4Z" fill="#F07B5A" />
                </svg>
              </div>
              <span className={styles.logoText}>
                <span className={styles.logoPrimary}>Yojana</span>
                <span className={styles.logoAccent}>Map</span>
              </span>
            </a>
          </div>

          {/* Central Header Search Bar */}
          <div className={styles.centerSearchWrapper} onClick={onSearchClick}>
            <Search size={16} className={styles.searchIcon} />
            <input 
              type="text" 
              readOnly
              placeholder={t('searchPlaceholder')} 
              className={styles.centerSearchInput}
            />
            <kbd className={styles.kbd}>/</kbd>
          </div>

          {/* Right Header Actions */}
          <div className={styles.actions}>
            <a href="#/compare" className={styles.compareBtn} title={t('comparePaths')}>
              <ArrowRightLeft size={16} />
              <span className={styles.compareText}>{t('comparePaths')}</span>
            </a>

            {/* Language Switcher Button (EN / नेपाली) */}
            <button 
              className={styles.langToggleBtn} 
              onClick={toggleLanguage} 
              title="Toggle Language"
            >
              <Globe size={16} />
              <span className={styles.langLabel}>
                {language === 'EN' ? 'EN / नेपाली' : 'नेपाली / EN'}
              </span>
            </button>

            {/* Sign in Button */}
            <button 
              className={styles.signInBtn}
              onClick={() => setAuthModalOpen(true)}
            >
              <User size={16} />
              <span>{t('signIn')}</span>
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
