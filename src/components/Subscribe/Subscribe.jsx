import React from "react";
import styles from "./Subscribe.module.css";
import BackgroundImage from "../../images/Hero-Image/SubscribeImage.PNG";

const Subscribe = () => {

  return (
    <div className={styles.wrapper}>
     
        <img src={BackgroundImage} alt="SubscribeImage" />
        <div className={styles.subscibeText}>
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero
            consequatur odit impedit earum.
          </p>
          <div className={styles.subscribeFileds}>
           
            <input type="email" placeholder="Enter Your Email Address" />
            <button className={styles.subscibebtn}>Subscribe Now</button>
          </div>
        </div>
      
    </div>
  );
};

export default Subscribe;
