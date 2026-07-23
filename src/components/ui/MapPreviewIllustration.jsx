import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle2, Award, Sparkles, ArrowRight, Shield, Laptop, BookOpen } from 'lucide-react';
import styles from './MapPreviewIllustration.module.css';

export default function MapPreviewIllustration({ onSelectRoadmap }) {
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
          <span>Interactive Career Map Preview</span>
        </div>
        <span className={styles.liveTag}>Live Visualizer</span>
      </div>

      <div className={styles.contentArea}>
        {/* Sample Interactive Path Flow */}
        <div className={styles.pathFlow}>
          <div className={`${styles.flowNode} ${activeStep >= 1 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>Step 01</div>
            <div className={styles.nodeIcon}>
              <BookOpen size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>Foundations & Skill Set</span>
              <span className={styles.nodeDesc}>Core GK, Math & Tech Basics</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>

          <div className={styles.connectorLine}>
            <div className={`${styles.connectorProgress} ${activeStep >= 2 ? styles.filled : ''}`} />
          </div>

          <div className={`${styles.flowNode} ${activeStep >= 2 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>Step 02</div>
            <div className={styles.nodeIcon}>
              <Laptop size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>Specialized Preparation</span>
              <span className={styles.nodeDesc}>Mock Tests, Exams & Projects</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>

          <div className={styles.connectorLine}>
            <div className={`${styles.connectorProgress} ${activeStep >= 3 ? styles.filled : ''}`} />
          </div>

          <div className={`${styles.flowNode} ${activeStep >= 3 ? styles.active : ''}`}>
            <div className={styles.nodeBadge}>Step 03</div>
            <div className={styles.nodeIcon}>
              <Award size={18} />
            </div>
            <div className={styles.nodeMeta}>
              <span className={styles.nodeTitle}>Goal Qualification</span>
              <span className={styles.nodeDesc}>Civil Service & Remote Jobs</span>
            </div>
            <CheckCircle2 size={18} className={styles.checkIcon} />
          </div>
        </div>

        {/* Quick Path Highlights Pills */}
        <div className={styles.pillsRow}>
          <button className={styles.pillBtn} onClick={() => onSelectRoadmap?.('loksewa')}>
            <Shield size={14} />
            <span>Lok Sewa Officer</span>
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
