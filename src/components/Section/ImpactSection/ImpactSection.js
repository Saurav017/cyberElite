import React from 'react'
import styles from './ImpactSection.module.css'
import Impact from '../../UI/Impact/Impact'
import { AiFillPieChart } from "react-icons/ai";

const impactData = [
  {
    iconImg: <AiFillPieChart />, 
    title: '2/3',
    description: 'Nearly 2/3 of companies which are using automation have outgrown their competitors',
  },
  {
    iconImg: <AiFillPieChart />, 
    title: '76%',
    description: '76% of companies that implemented marketing automation generated a return on their investment within the first year',
  },
  {
    iconImg: <AiFillPieChart />, 
    title: '12.2%',
    description: 'Marketing automation provided a 12.2% reduction in marketing overhead.',
  },
  {
    iconImg: <AiFillPieChart />, 
    title: '4X',
    description: 'Successful companies are utilizing 4x marketing automation tools for lead generation, qualification, and customer retention',
  },
];
const ImpactSection = () => {
  return (
    <main className={styles.container}>
        <h1 className={styles.title}>Impact Delievered</h1>
        <div className={styles.impactContainer}>
        {
          impactData.map((data, index) => (  
          <Impact iconImg={data.iconImg} heading={data.title} description={data.description}/>
          ))
        }
        </div>
    </main>
  )
}

export default ImpactSection
