import React from 'react';
import styles from './StepsSection.module.css'

const MarketingAutomation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Getting Started with Marketing Automation</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
        <div  className={styles.iconWrapperContainer}>
        <div className={styles.iconWrapper}>
            <img src="/icons/capture-icon.svg" alt="Capture" className={styles.icon} />
          </div>
        </div>
          
          <h3 className={styles.stepTitle}>CAPTURE</h3>
        </div>

        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <img src="/icons/nurture-icon.svg" alt="Nurture" className={styles.icon} />
          </div>
          <h3 className={styles.stepTitle}>NURTURE</h3>
        </div>

        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <img src="/icons/convert-icon.svg" alt="Convert" className={styles.icon} />
          </div>
          <h3 className={styles.stepTitle}>CONVERT</h3>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomation;
