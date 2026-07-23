import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import styles from './AuthModal.module.css';

export default function AuthModal({ isOpen, onClose }) {
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
              <h3 className={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</h3>
              <p className={styles.subtitle}>
                {isSignUp ? 'Track your roadmap progress across all devices.' : 'Sign in to access your saved career progress.'}
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
              <h4>{isSignUp ? 'Account Created Successfully!' : 'Logged In Successfully!'}</h4>
              <p>Syncing your saved progress and roadmap trackers...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email Address</label>
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
                <label className={styles.label}>Password</label>
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
                <span>{isSignUp ? 'Sign Up for YojanaMap' : 'Sign In'}</span>
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
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
