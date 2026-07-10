import React from 'react';
import styles from './SkeletonLoader.module.css';

export default function SkeletonLoader({ type = 'card-list' }) {
  if (type === 'canvas') {
    return (
      <div className={styles.canvasSkeleton} role="status" aria-busy="true">
        <div className={styles.toolbarSkeleton} />
        <div className={styles.spineSkeleton}>
          <div className={styles.phaseSkeleton}>
            <div className={styles.phaseHeaderSkeleton} />
            <div className={styles.nodesGridSkeleton}>
              <div className={styles.nodeCardSkeleton} />
              <div className={styles.nodeCardSkeleton} />
              <div className={styles.nodeCardSkeleton} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default 'card-list' skeleton loader for homepage
  return (
    <div className={styles.cardsSkeletonGrid} role="status" aria-busy="true">
      <div className={styles.cardSkeleton} />
      <div className={styles.cardSkeleton} />
      <div className={styles.cardSkeleton} />
      <div className={styles.cardSkeleton} />
    </div>
  );
}
