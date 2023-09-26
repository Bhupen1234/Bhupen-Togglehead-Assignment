import React from 'react'
import styles from "./FAQs.module.css"
import BasicAccordion from '../BasicAccordion/BasicAccordion';


const faqQuestions = [
    {
      title: "How does an investor gain access to MF Utility?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "Will investors be able to have multiple common Account Numbers?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    
    {
      title: "How much is my case worth?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];

const FAQs = () => {
  return (
    <div className={styles.wrapper}>
       <h2 className={styles.title}>FAQ</h2>

       <div className={styles.accordianWrapper}>
        {
            faqQuestions.map((ele)=>{
                return(
                <BasicAccordion question={ele.title} answer={ele.content} />
                )
            })
        }
       </div>
    </div>
  )
}

export default FAQs
