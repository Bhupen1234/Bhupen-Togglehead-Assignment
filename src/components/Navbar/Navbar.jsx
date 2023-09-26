import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return(
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <h1>LOGO</h1>
    </div>
    <div className={styles.navigate}>
    <ul className={styles.navbarLinks}>
       <li>Qualifications</li>   
       <li> Organizations</li>
       <li>Research & Analysis</li>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
    </ul>
    <div className={styles.button}>
       Enrollment
    </div>
    </div>
  </nav>
)



};

export default Navbar;
