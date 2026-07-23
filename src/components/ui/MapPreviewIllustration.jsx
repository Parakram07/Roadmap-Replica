import React, { useState, useEffect } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { Compass, CheckCircle2, Award, ArrowRight, Shield, Laptop, BookOpen } from 'lucide-react';
import styles from './MapPreviewIllustration.module.css';

export default function MapPreviewIllustration({ onSelectRoadmap }) {
  const { t } = useProgress();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.previewBox}>
      <div className={styles.headerBar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
        </div>
        <div className={styles.barTitle}>
          <Compass size={14} className={styles.titleIcon} />
          <span>{t('previewTitle')}</span>
        </div>
        <span className={styles.liveTag}>{t('liveVisualizer')}</span>
      </div>

      <div className={styles.contentArea}>
        {/* Sample Interactive Path Flow */}
        <div className={styles.pathFlow}>
          <div className={`${styles.flowNode} ${activeStep >= 1 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>{t('step01')}</div>
            <div className={styles.nodeIcon}>
              <BookOpen size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>{t('step1Title')}</span>
              <span className={styles.nodeDesc}>{t('step1Desc')}</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>

          <div className={styles.connectorLine}>
            <div className={`${styles.connectorProgress} ${activeStep >= 2 ? styles.filled : ''}`} />
          </div>

          <div className={`${styles.flowNode} ${activeStep >= 2 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>{t('step02')}</div>
            <div className={styles.nodeIcon}>
              <Laptop size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>{t('step2Title')}</span>
              <span className={styles.nodeDesc}>{t('step2Desc')}</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>

          <div className={styles.connectorLine}>
            <div className={`${styles.connectorProgress} ${activeStep >= 3 ? styles.filled : ''}`} />
          </div>

          <div className={`${styles.flowNode} ${activeStep >= 3 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>{t('step03')}</div>
            <div className={styles.nodeIcon}>
              <Award size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>{t('step3Title')}</span>
              <span className={styles.nodeDesc}>{t('step3Desc')}</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>
        </div>

        {/* Quick Path Highlights Pills */}
        <div className={styles.pillsRow}>
          <button className={styles.pillBtn} onClick={() => onSelectRoadmap?.('loksewa')}>
            <Shield size={14} />
            <span>Lok Sewa</span>
            <ArrowRight size={12} />
          </button>

          <button className={styles.pillBtn} onClick={() => onSelectRoadmap?.('frontend')}>
            <Laptop size={14} />
            <span>Frontend Dev</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
