import React from 'react'
import styles from './TitleSection.module.css'
import heroImg from './heroImg.png'
import Navbar from '../NavbarSection/NavbarSection'
const TitleSection = () => {
  return (
    <main className={styles.titleContainer}>
        <div className={styles.contentDiv}>
            <h1 className={styles.titleHeading}>Marketing on Autopilot</h1>
            <p className={styles.titleDesc}>Efficiently optimize your sales  and marketing  with our automation services, saving valuable time and resources.</p>
            <button className={styles.titleBtn}>Get In Touch</button>
        </div>
        <div className={styles.imageDiv}>
            <img src={heroImg} alt='marketing' className={styles.titleImg}/>
        </div>
    </main>
  )
}

export default TitleSection
