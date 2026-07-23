import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Github, Twitter, Compass, Sparkles, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const { language, t } = useProgress();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logoGroup}>
              <div className={styles.logoIconContainer}>
                <svg viewBox="0 0 36 36" fill="none" style={{ width: 28, height: 28 }}>
                  <rect x="15" y="18" width="6" height="14" rx="3" fill="#3D5A1E" />
                  <path d="M16 20L6 8C5.2 7 6 5.5 7.2 5.5H11C12 5.5 12.8 6 13.4 6.8L18 13.5L16 20Z" fill="#6B9A38" />
                  <path d="M20 20L30 8C30.8 7 30 5.5 28.8 5.5H25C24 5.5 23.2 6 22.6 6.8L18 13.5L20 20Z" fill="#3D5A1E" />
                  <path d="M26 4L32 5.5L30.5 11.5L28.5 8.5L26 4Z" fill="#F07B5A" />
                </svg>
              </div>
              <span className={styles.logoText}>
                <span style={{ color: '#3D5A1E' }}>Yojana</span>
                <span style={{ color: '#F07B5A' }}>Map</span>
              </span>
            </div>
            <p className={styles.tagline}>{t('footerDesc')}</p>
          </div>

          {/* Nav Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4 className={styles.linkHeader}>{language === 'NP' ? 'मुख्य क्षेत्रहरू' : 'Core Sectors'}</h4>
              <a href="#find-your-path" className={styles.link}>{t('sarkariTab')}</a>
              <a href="#find-your-path" className={styles.link}>{t('creativeTab')}</a>
              <a href="#find-your-path" className={styles.link}>{t('softwareTab')}</a>
              <a href="#find-your-path" className={styles.link}>{t('skillsTab')}</a>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.linkHeader}>{language === 'NP' ? 'उपकरणहरू' : 'Tools & Quiz'}</h4>
              <a href="#/compare" className={styles.link}>{t('comparePaths')}</a>
              <a href="#" className={styles.link}>{t('takeQuiz')}</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>{t('copyright')}</p>
          
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
