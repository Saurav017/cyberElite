import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger
import styles from "./NavbarSection.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>CyberElite</h1>
      </div>
      <ul
        className={isMobile ? `${styles.navLinks} ${styles.mobileMenu}` : styles.navLinks}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#agencies">For Agencies</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button
        className={styles.mobileIcon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
