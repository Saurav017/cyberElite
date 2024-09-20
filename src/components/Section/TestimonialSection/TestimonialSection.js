import React from "react";

import styles from "./TestimonialSection.module.css";

import profilePic from './profile.jfif'

const TestimonialSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>TESTIMONIALS</h2>
        <h3 className={styles.subtitle}>WHAT OUR CLIENTS SAY</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className={styles.testimonial}>
          <img src={profilePic} alt="Client" className={styles.image} />
          <div className={styles.textContainer}>
            <p className={styles.quote}>
              <span className={styles.doubleQuotes}>“</span><br  />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an <br />unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h4 className={styles.name}>GAUTAM SINGH</h4>
            <p className={styles.position}>GRAPHIC DESIGNER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
