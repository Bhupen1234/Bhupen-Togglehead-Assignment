import React from "react";
import styles from "./Footer.module.css";
import facebook from "../../images/Icons/facebook-f.svg";
import linkdin from "../../images/Icons/linkedin-in.svg";
import instagram from "../../images/Icons/instagram.svg";
import twitter from "../../images/Icons/square-twitter.svg";
import youtube from "../../images/Icons/youtube.svg";
import location from "../../images/Icons/location-dot-solid.svg";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.contactUs}>
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            ut. Ratione placeat dolores aliquam nam possimus temporibus illo ab?
            Aliquam enim similique doloribus error!
          </p>
        </div>

        <div className={styles.followUs}>
          <h3>Follow Us</h3>
          <div className={styles.logos}>
            <img src={facebook} alt="facebook" width="20px" style={{filter:"invert(100%)"}}/>
            <img src={linkdin} alt="linkdin" width="20px" style={{filter:"invert(100%)"}}/>
            <img src={instagram} alt="instagram" width="20px" style={{filter:"invert(100%)"}}/>
            <img src={twitter} alt="twitter" width="20px" style={{filter:"invert(100%)"}}/>
            <img src={youtube} alt="youtube" width="20px" style={{filter:"invert(100%)"}}/>
          </div>
        </div>

        <div className={styles.headoffice}>
          <h3  >
            <span className={styles.locationLogo}>
              <img src={location} alt="location" width="20px" style={{filter:"invert(100%)"}}/>
            </span>{" "}
            Head Office
          </h3>
          <p>
            Address: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
            illo harum! Sint molestias, commodi beatae fuga, aperiam possimus
            nobis quae deleniti dolorem illum natus architecto assumenda
            aliquam. Nihil quasi est animi atque!
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.copyright}>
        <h5>© 2023 All rights Reserved. Privacy Policy</h5>
      </div>
    </div>
  );
};

export default Footer;
