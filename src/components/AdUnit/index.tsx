import React from 'react';
import styles from './styles.module.css';

type AdUnitProps = {
  slot?: string;
  format?: 'rectangle' | 'leaderboard' | 'sidebar';
  label?: string;
};

export default function AdUnit({
  slot,
  format = 'rectangle',
  label = 'Ad Slot',
}: AdUnitProps): React.JSX.Element {
  return (
    <div
      className={`${styles.adUnit} ${styles[format]}`}
      data-ad-slot={slot}
      role="complementary"
      aria-label="Advertisement"
    >
      <span className={styles.label}>{label}</span>
      {slot && <span className={styles.slot}>slot: {slot}</span>}
    </div>
  );
}
