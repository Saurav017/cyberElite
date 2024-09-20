import React from 'react'
import Feature from '../../UI/Feature/Feature'
import { MdOutlineRoute } from "react-icons/md";
import styles from './FeatureSection.module.css'

const services = [
  {
    iconImg: <MdOutlineRoute />, 
    title: 'Journey Automation',
    description: 'We help our clients maximize impact across CX touchpoints by discovering, building, testing, and fine-tuning automated flows including welcome series, post-purchase, cart abandonment, browse abandonment, reactivation, and a lot more.',
  },
  {
    iconImg: <MdOutlineRoute />, 
    title: 'Segmentation & Personalization',
    description: 'We are committed to supporting growing brands leverage progressive profiling to gain valuable insights into consumer behaviour, enabling hyper-targeted personalization of their messaging.',
  },
  {
    iconImg: <MdOutlineRoute />, 
    title: 'Email Design',
    description: 'We build highly customizable and responsive email template designs that clients can deploy across campaigns without a hassle.',
  },
  {
    iconImg: <MdOutlineRoute />, 
    title: 'Platform Migration',
    description: 'Tired of juggling multiple ESPs? Let us take the stress out of migrating and managing email programs across platforms and help you get the most out of your existing ESP. Need something better? We’ll point you to the right one!',
  },
  {
    iconImg: <MdOutlineRoute />, 
    title: 'Reporting and Analytics',
    description: 'We meticulously track the performance of the deployed automations against robust evaluation metrics. Driven to continuously optimize their implemented efforts, our professionals take great care to scope out every possible avenue of improvement.',
  },
  {
    iconImg: <MdOutlineRoute />, 
    title: 'A/B Testing',
    description: 'To understand what resonates best with your audiences, we rigorously pit different elements of your automated emails against one another to determine the top-performing ones. All implemented changes are backed by indisputable data.',
  },
];

const FeatureSection = () => {
  return (
    <div className={styles.featureContainer}>
      {
        services.map((service, index) => (
          <Feature key={index} img={service.iconImg} title={service.title} description={service.description} />
        ))
      }
      
    </div>
  )
}

export default FeatureSection
