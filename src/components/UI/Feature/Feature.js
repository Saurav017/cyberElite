import React from 'react'
import  styles from './Feature.module.css'
// f97316
const Feature = ({img, title, description}) => {
  return (
    <div className={styles.container}>
        <div className={styles.iconContainer}><span className={styles.icon}>{img}</span></div>
        <div className={styles.contentContainer}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>  
  )
}

export default Feature
