import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { X, CheckCircle, ArrowRight, Award, Compass, Sparkles } from 'lucide-react';
import styles from './CareerQuizModal.module.css';

export default function CareerQuizModal({ isOpen, onClose, onSelectRoadmap }) {
  const { language, t, getLocalizedRoadmap } = useProgress();
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

    let id = 'frontend';
    if (domain === 'sarkari') {
      if (workStyle === 'banking') id = 'banking';
      else if (workStyle === 'teaching') id = 'teaching';
      else if (workStyle === 'security') id = 'policearmy';
      else id = 'loksewa';
    } else if (domain === 'tech') {
      if (workStyle === 'data') id = 'datascientist';
      else if (workStyle === 'mobile') id = 'mobile';
      else if (workStyle === 'backend') id = 'backend';
      else id = 'frontend';
    } else {
      if (workStyle === 'video') id = 'videocreator';
      else id = 'uiux';
    }

    const loc = translations[language]?.roadmaps?.[id] || translations['EN']?.roadmaps?.[id];
    return { id, title: loc?.title || id };
  };

  const rec = getRecommendation();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass-panel`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <Sparkles size={20} className={styles.sparkleIcon} />
            <div>
              <h3 className={styles.title}>{t('quizTitle')}</h3>
              <p className={styles.subtitle}>{t('quizSubtitle')}</p>
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
              <h4 className={styles.questionText}>{t('q1Title')}</h4>
              <div className={styles.optionsGrid}>
                <button 
                  className={`${styles.optionCard} ${answers.domain === 'sarkari' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'sarkari')}
                >
                  <Award size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>{t('q1Option1Title')}</strong>
                    <span>{t('q1Option1Desc')}</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.domain === 'tech' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'tech')}
                >
                  <Compass size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>{t('q1Option2Title')}</strong>
                    <span>{t('q1Option2Desc')}</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.domain === 'creative' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('domain', 'creative')}
                >
                  <Sparkles size={24} className={styles.optionIcon} />
                  <div className={styles.optionText}>
                    <strong>{t('q1Option3Title')}</strong>
                    <span>{t('q1Option3Desc')}</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.questionStep}>
              <h4 className={styles.questionText}>{t('q2Title')}</h4>
              <div className={styles.optionsGrid}>
                <button 
                  className={`${styles.optionCard} ${answers.duration === 'part' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('duration', 'part')}
                >
                  <div className={styles.optionText}>
                    <strong>{t('q2Option1Title')}</strong>
                    <span>{t('q2Option1Desc')}</span>
                  </div>
                </button>

                <button 
                  className={`${styles.optionCard} ${answers.duration === 'full' ? styles.selected : ''}`}
                  onClick={() => handleSelectOption('duration', 'full')}
                >
                  <div className={styles.optionText}>
                    <strong>{t('q2Option2Title')}</strong>
                    <span>{t('q2Option2Desc')}</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.questionStep}>
              <h4 className={styles.questionText}>{t('q3Title')}</h4>
              <div className={styles.optionsGrid}>
                {answers.domain === 'sarkari' ? (
                  <>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'loksewa' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'loksewa')}>
                      <span>{language === 'NP' ? 'निजामती सेवा अधिकृत' : 'Administrative Officer'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'banking' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'banking')}>
                      <span>{language === 'NP' ? 'बैंकिङ र वित्तीय क्षेत्र' : 'Banking & Financial Sector'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'teaching' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'teaching')}>
                      <span>{language === 'NP' ? 'विद्यालय शिक्षण' : 'School Teaching & Education'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'security' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'security')}>
                      <span>{language === 'NP' ? 'प्रहरी तथा सुरक्षा निकाय' : 'Police / Defense Forces'}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'frontend' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'frontend')}>
                      <span>{language === 'NP' ? 'वेब र इन्टरफेस डिजाइन' : 'Visual Web & Interfaces'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'data' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'data')}>
                      <span>{language === 'NP' ? 'डाटा विश्लेषण र AI' : 'Data Analysis & AI'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'uiux' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'uiux')}>
                      <span>{language === 'NP' ? 'उत्पादन तथा UX डिजाइन' : 'Product & UX Design'}</span>
                    </button>
                    <button className={`${styles.optionCard} ${answers.workStyle === 'video' ? styles.selected : ''}`} onClick={() => handleSelectOption('workStyle', 'video')}>
                      <span>{language === 'NP' ? 'भिडियो सम्पादन र मिडिया' : 'Video Production & Editing'}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.resultStep}>
              <CheckCircle size={48} className={styles.resultCheck} />
              <h4 className={styles.resultTitle}>{t('recTitle')}</h4>
              <div className={styles.recCard}>
                <span className={styles.recBadge}>{t('topMatch')}</span>
                <h3 className={styles.recName}>{rec.title}</h3>
                <p className={styles.recDesc}>{t('recDesc')}</p>
              </div>

              <div className={styles.resultActions}>
                <button 
                  className={styles.startBtn}
                  onClick={() => {
                    onClose();
                    onSelectRoadmap(rec.id);
                  }}
                >
                  <span>{t('openRecPath')}</span>
                  <ArrowRight size={18} />
                </button>
                <button className={styles.retakeBtn} onClick={handleReset}>{t('retakeQuiz')}</button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          {step > 1 && step <= 3 && (
            <button className={styles.backBtn} onClick={() => setStep((prev) => prev - 1)}>
              {t('backBtn')}
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
              <span>{step === 3 ? t('getRec') : t('nextQuestion')}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
