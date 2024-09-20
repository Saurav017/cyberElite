import React from 'react';
import styles from './StepsSection.module.css'
import { FaLightbulb } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";

const MarketingAutomation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Getting Started with Marketing Automation</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
        <div  className={styles.iconWrapperContainer}>
        <div className={styles.iconWrapper}>
            <span className={styles.icon}> <FaLightbulb /></span>
          </div>
        </div>
          
          <h3 className={styles.stepTitle}>CAPTURE</h3>
        </div>

        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}><RiPlantFill /> </span>
          </div>
          <h3 className={styles.stepTitle}>NURTURE</h3>
        </div>

        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon} > <SiConvertio /></span>
          </div>
          <h3 className={styles.stepTitle}>CONVERT</h3>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomation;
