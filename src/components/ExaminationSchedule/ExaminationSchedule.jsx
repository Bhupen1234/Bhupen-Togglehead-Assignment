import React from 'react'
import styles from "./ExaminationSchedule.module.css"
import calendar from "../../images/Icons/Calendar.svg"
const ExaminationSchedule = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Upcoming Examinations</h2>
        <p>Enquire about the examination & register for exams</p>

        <div className={styles.verticalLine}></div>
      </div>
      
      <div className={styles.schedule}>
        <img src={calendar} alt="calendar" />
        <div className={styles.scheduleDate}>
            <h3>02th October 2014</h3>
            <p>Level 1 exam</p>
        </div>
      </div>

      <div className={styles.schedule}>
        <img src={calendar} alt="calendar" />
        <div className={styles.scheduleDate}>
            <h3>Nov-Dec 2016</h3>
            <p>Level 2 exam</p>
        </div>
      </div>


      <div className={styles.schedule}>
        <img src={calendar} alt="calendar" />
        <div className={styles.scheduleDate}>
            <h3>Ongoing this year</h3>
            <p>Level 3 (Grad)</p>
        </div>
      </div>

    </div>
  )
}

export default ExaminationSchedule
