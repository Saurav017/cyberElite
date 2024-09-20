import React from 'react'
import styles from './Impact.module.css'

const Impact = ({iconImg, heading, description}) => {
  return (
    <div className={styles.impactDiv}>
        <span className={styles.icon}>{iconImg}</span>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Impact
