import React from 'react'
import Card from '../../UI/Card/Card'
import styles from './CardSection.module.css'

import { FaMagnifyingGlass } from "react-icons/fa6";
import SectionHeading from '../../UI/SectionHeading/SectionHeading';

const leadStrategies = [
  {
    iconImg: <FaMagnifyingGlass /> , 
    title: 'Know thy customers',
    description: 'Identifying your buyer personas is crucial to understanding their challenges and crafting relevant marketing automation campaigns that help solve those challenges.',
    isFirst: true
  },
  {
    iconImg: <FaMagnifyingGlass />, 
    title: 'Crafting compelling content for lead capture',
    description: 'Create and publish relevant and targeted content that attracts your web visitors to associate with your brand ecosystem.',
    isFirst: false
  },
  {
    iconImg: <FaMagnifyingGlass />, 
    title: 'Lead outreach',
    description: 'Enable your sales team to leverage key data to target qualified leads with offers that they can’t resist, leading to high conversions.',
    isFirst: false
  },
  {
    iconImg: <FaMagnifyingGlass />, 
    title: 'Lead nurturing',
    description: 'Stimulate and nurture your target audience with relevant content at every touchpoint using consumer data-backed frameworks powered by analytics.',
    isFirst: false
  },
  {
    iconImg: <FaMagnifyingGlass />, 
    title: 'All in the company you keep',
    description: 'It’s imperative to collaborate with a marketing automation support partner that has all the technical know-how of automation and how it applies to your specific business use case.',
    isFirst: false
  },
];
const CardSection = () => {
  return (
    <main className={styles.strategyDiv}>
    <SectionHeading />
      <div className={styles.strategyContainer}>
      {
        leadStrategies.map((data, index) => (
          <div key={index}>
        <Card imgDiv={data.iconImg} title={data.title} description={data.description} isFirst={data.isFirst} />
      </div>
        ))
      } 
        </div>
    </main>
  )
}

export default CardSection
