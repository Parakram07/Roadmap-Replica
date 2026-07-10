import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M10 13v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8" />
                <path d="M14 13v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
                <circle cx="12" cy="8" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className={styles.logoText}>Pathify</span>
          </div>
          <p className={styles.description}>
            Explore and track modern developer learning paths. Crafted with precision to accelerate your technical skills.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Roadmaps</h4>
            <a href="/roadmap/frontend" className={styles.link}>Frontend Developer</a>
            <a href="/roadmap/backend" className={styles.link}>Backend Developer</a>
            <a href="/roadmap/devops" className={styles.link}>DevOps Engineer</a>
          </div>
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Skills</h4>
            <a href="/roadmap/react" className={styles.link}>ReactJS</a>
            <a href="/roadmap/git" className={styles.link}>Git & GitHub</a>
          </div>
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Resources</h4>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>Open Source</a>
            <a href="#" className={styles.link}>FAQ</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Pathify. All rights reserved.
          </p>
          <div className={styles.credits}>
            <span>Made with</span>
            <Heart size={14} className={styles.heartIcon} />
            <span>by Shobha and the Gang.</span>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="GitHub"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
