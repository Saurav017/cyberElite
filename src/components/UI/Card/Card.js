import React from 'react'
import styles from './Card.module.css'

const Card = ({imgDiv, title, description}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.img_div}>{imgDiv}</div>
        <div className={styles.content_div}>
            <h2 className={styles.content_heading}>{title}</h2>
            <p className={styles.content_desc}>{description}</p>
        </div>
    </div>
  )
}

export default Card
