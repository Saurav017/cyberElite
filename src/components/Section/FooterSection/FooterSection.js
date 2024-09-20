import React from "react";
import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>Cyber Elite Pvt. Lmt.</h3>
          <p>
            We thrive on challenges with our urge to discover new ways to uplift
            your business. So, if you like our approach, let's meet over a
            coffee.
          </p>
          <p>© 2023 Cyber Elite, All Rights Reserved</p>
        </div>
        <div className={styles.contact}>
          <h4>Get in Touch</h4>
          <p>226 LIG, Jawahar Nagar, Near AB Road Dewas, 455001, India</p>
          <p>Email: info@cyberelite.in</p>
          <p>Mobile: +91-708-989-9090</p>
          <p>Landline: 0731-3142 545</p>
        </div>
        <div className={styles.services}>
          <h4>Services</h4>
          <ul>
            <li>Customer Experience</li>
            <li>Data Science & Visualisation</li>
            <li>Salesforce Consulting</li>
            <li>Cyber Security</li>
            <li>Web Augmentation</li>
          </ul>
        </div>
        <div className={styles.industries}>
          <h4>Industries</h4>
          <ul>
            <li>Healthcare</li>
            <li>Financial Services</li>
            <li>Manufacturing</li>
            <li>Education</li>
            <li>Retail & Communication</li>
          </ul>
        </div>
        <div className={styles.resources}>
          <h4>Resources</h4>
          <ul>
            <li>Case Studies</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
