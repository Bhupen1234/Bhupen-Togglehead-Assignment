import React from "react";
import styles from "./Achivements.module.css";



const Content =({title,reach,subtitle,desc})=>{
    return(
      
        <div className={styles.textWrapper}>
          <h5>{title}</h5>
          <h1>{reach}</h1>
          <h3>{subtitle}</h3>
          <p>
           {desc}
          </p>
        </div>
  
        
      
    )
}

const Achivements = () => {
  return (
    <div className={styles.wrapper}>
    <Content title="Lorem ipsum" reach="123+" subtitle="Lorem ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
    recusandae ducimus quasi earum corrupti expedita, reiciendis,
    aspernatur incidunt quas odit inventore iure nesciunt blanditiis
    consequuntur illo ipsum iusto? Fugiat, temporibus?"/>

    <Content title="Lorem ipsum" reach="12+" subtitle="Lorem ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
    recusandae ducimus quasi earum corrupti expedita, reiciendis,
    aspernatur incidunt quas odit inventore iure nesciunt blanditiis
    consequuntur illo ipsum iusto? Fugiat, temporibus?"/>

<Content title="Lorem ipsum" reach="12+" subtitle="Lorem ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
    recusandae ducimus quasi earum corrupti expedita, reiciendis,
    aspernatur incidunt quas odit inventore iure nesciunt blanditiis
    consequuntur illo ipsum iusto? Fugiat, temporibus?"/>

<Content title="Lorem ipsum" reach="123" subtitle="Lorem ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
    recusandae ducimus quasi earum corrupti expedita, reiciendis,
    aspernatur incidunt quas odit inventore iure nesciunt blanditiis
    consequuntur illo ipsum iusto? Fugiat, temporibus?"/>

   </div>
  );
};

export default Achivements;
