import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { X, Lock, Mail, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import styles from './AuthModal.module.css';

export default function AuthModal({ isOpen, onClose }) {
  const { t } = useProgress();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass-panel`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.brandGroup}>
            <div className={styles.logoBadge}>
              <ShieldCheck size={20} className={styles.badgeIcon} />
            </div>
            <div>
              <h3 className={styles.title}>{isSignUp ? t('createAccount') : t('welcomeBack')}</h3>
              <p className={styles.subtitle}>
                {isSignUp ? t('authSubtitleReg') : t('authSubtitleSign')}
              </p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          {submitted ? (
            <div className={styles.successState}>
              <UserCheck size={44} className={styles.checkIcon} />
              <h4>{isSignUp ? t('createAccount') : t('welcomeBack')}</h4>
              <p>Syncing your saved progress and roadmap trackers...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>{t('emailLabel')}</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.fieldIcon} />
                  <input 
                    type="email" 
                    required 
                    placeholder="student@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>{t('passwordLabel')}</label>
                <div className={styles.inputWrapper}>
                  <Lock size={18} className={styles.fieldIcon} />
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>{isSignUp ? t('submitSignUp') : t('submitSignIn')}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        <div className={styles.footer}>
          <button 
            type="button" 
            className={styles.switchBtn} 
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? t('hasAccount') : t('noAccount')}
          </button>
        </div>
      </div>
    </div>
  );
}
