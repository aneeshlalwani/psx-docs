import React from 'react';
import styles from './styles.module.css';

type CalloutType = 'info' | 'tip' | 'warning' | 'danger' | 'note';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
};

const ICONS: Record<CalloutType, string> = {
  info: 'i',
  tip: '★',
  warning: '!',
  danger: '×',
  note: '•',
};

export default function Callout({
  type = 'info',
  title,
  children,
}: CalloutProps): React.JSX.Element {
  return (
    <aside className={`${styles.callout} ${styles[type]}`} role="note">
      <div className={styles.icon} aria-hidden="true">
        {ICONS[type]}
      </div>
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.content}>{children}</div>
      </div>
    </aside>
  );
}
