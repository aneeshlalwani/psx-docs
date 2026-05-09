import React from 'react';
import styles from './styles.module.css';

type DisclaimerProps = {
  children?: React.ReactNode;
};

const DEFAULT_DISCLAIMER = `The information on this site is provided for educational purposes only and does
not constitute financial, investment, tax, or legal advice. Investing in
securities carries risk, including the possible loss of principal. Always do
your own research and consult a licensed financial advisor before making any
investment decision.`;

export default function Disclaimer({children}: DisclaimerProps): React.JSX.Element {
  return (
    <section className={styles.disclaimer} role="contentinfo" aria-label="Disclaimer">
      <h4 className={styles.heading}>Disclaimer</h4>
      <div className={styles.body}>{children ?? <p>{DEFAULT_DISCLAIMER}</p>}</div>
    </section>
  );
}
