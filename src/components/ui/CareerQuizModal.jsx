import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, HelpCircle, Award, Compass, Sparkles } from 'lucide-react';
import styles from './CareerQuizModal.module.css';

export default function CareerQuizModal({ isOpen, onClose, onSelectRoadmap }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    domain: '',
    duration: '',
    workStyle: ''
  });

  if (!isOpen) return null;

  const handleSelectOption = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ domain: '', duration: '', workStyle: '' });
  };

  const getRecommendation = () => {
    const { domain, duration, workStyle } = answers;

    if (domain === 'sarkari') {
      if (workStyle === 'banking') return { id: 'banking', title: 'Banking Exams (NRB & Commercial)' };
      if (workStyle === 'teaching') return { id: 'teaching', title: 'Teaching License (TSC)' };
      if (workStyle === 'security') return { id: 'policearmy', title: 'Police / Army Officer' };
      return { id: 'loksewa', title: 'Lok Sewa Officer (Sakha Adhikrit)' };
    } else if (domain === 'tech') {
      if (workStyle === 'data') return { id: 'datascientist', title: 'Data Scientist / AI' };
      if (workStyle === 'mobile') return { id: 'mobile', title: 'Mobile Developer' };
      if (workStyle === 'backend') return { id: 'backend', title: 'Backend Developer' };
      return { id: 'frontend', title: 'Frontend Developer' };
    } else {
      if (workStyle === 'video') return { id: 'videocreator', title: 'Video Creator & Editor' };
      return { id: 'uiux', title: 'UI/UX Product Designer' };
    }
  };

  const rec = getRecommendation();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass-panel`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <Sparkles size={20} className={styles.sparkleIcon} />
            <div>
              <h3 className={styles.title}>Smart Career Quiz</h3>
              <p className={styles.subtitle}>Discover your ideal preparation roadmap in 3 questions.</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Quiz">
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          {step <= 3 && (
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
            </div>
          )}

          {step === 1 && (
            <div className={styles.questionStep}>
              <h4 className={styles.questionText}>1. What is your primary career goal?</h4>
              <div className={styles.optionsGrid}>
                <button 
                  className={`${styles.optionCard} ${answers.domain === 'sarkari' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'sarkari')}
                >
                  <Award size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>Sarkari / Lok Sewa</strong>
                    <span>Civil Service, Banking & Public Security</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.domain === 'tech' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'tech')}
                >
                  <Compass size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>Tech & Engineering</strong>
                    <span>Software, Web, Mobile & AI systems</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.domain === 'creative' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'creative')}
                >
                  <Sparkles size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>Creative & Design</strong>
                    <span>UI/UX Design, Media & Content</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.questionStep}>
              <h4 className={styles.questionText}>2. How much time can you dedicate daily?</h4>
              <div className={styles.optionsGrid}>
                <button 
                  className={`${styles.optionCard} ${answers.duration === 'part' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('duration', 'part')}
                >
                  <div className={styles.optionText}>
                    <strong>2 - 3 Hours / Day</strong>
                    <span>Steady progress while studying/working</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.duration === 'full' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('duration', 'full')}
                >
                  <div className={styles.optionText}>
                    <strong>5+ Hours / Day</strong>
                    <span>Full-time intensive preparation</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.questionStep}>
              <h4 className={styles.questionText}>3. Select your preferred work style:</h4>
              <div className={styles.optionsGrid}>
                {answers.domain === 'sarkari' ? (
                  <>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'loksewa' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'loksewa')}>
                      <span>Administrative Officer</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'banking' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'banking')}>
                      <span>Banking & Financial Sector</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'teaching' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'teaching')}>
                      <span>School Teaching & Education</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'security' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'security')}>
                      <span>Police / Defense Forces</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'frontend' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'frontend')}>
                      <span>Visual Web & Interfaces</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'data' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'data')}>
                      <span>Data Analysis & AI</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'uiux' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'uiux')}>
                      <span>Product & UX Design</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'video' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'video')}>
                      <span>Video Production & Editing</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.resultStep}>
              <CheckCircle size={48} className={styles.resultCheck} />
              <h4 className={styles.resultTitle}>Recommended Path For You</h4>
              <div className={styles.recCard}>
                <span className={styles.recBadge}>Top Match</span>
                <h3 className={styles.recName}>{rec.title}</h3>
                <p className={styles.recDesc}>Matches your target sector and daily time commitment.</p>
              </div>

              <div className={styles.resultActions}>
                <button 
                  className={styles.startBtn}
                  onClick={() => {
                    onClose();
                    onSelectRoadmap(rec.id);
                  }}
                >
                  <span>Open Recommended Roadmap</span>
                  <ArrowRight size={18} />
                </button>
                <button className={styles.retakeBtn} onClick={handleReset}>Retake Quiz</button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          {step > 1 && step <= 3 && (
            <button className={styles.backBtn} onClick={() => setStep((prev) => prev - 1)}>
              Back
            </button>
          )}

          {step <= 3 && (
            <button 
              className={styles.nextBtn}
              disabled={
                (step === 1 && !answers.domain) ||
                (step === 2 && !answers.duration) ||
                (step === 3 && !answers.workStyle)
              }
              onClick={() => {
                if (step === 3) {
                  setStep(4);
                } else {
                  handleNext();
                }
              }}
            >
              <span>{step === 3 ? 'Get Recommendation' : 'Next Question'}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
