import React from 'react'
import Image1 from "../../images/Hero-Image/Image1.png"

import styles from "./Hero.module.css"
import Carousel from '../Carousel/Carousel'
const data=[
    {
        image: Image1,
        title : "Lorem ipsum",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum adipisci obcaecati quo soluta, quia exercitationem minus rem magnam placeat cum in voluptate quas, consequuntur libero enim est itaque dolor saepe voluptatem provident alias consequatur?"
    },
    {
        image: Image1,
        title : "Lorem ipsum",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum adipisci obcaecati quo soluta, quia exercitationem minus rem magnam placeat cum in voluptate quas, consequuntur libero enim est itaque dolor saepe voluptatem provident alias consequatur?"
    },
    {
        image: Image1,
        title : "Lorem ipsum",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum adipisci obcaecati quo soluta, quia exercitationem minus rem magnam placeat cum in voluptate quas, consequuntur libero enim est itaque dolor saepe voluptatem provident alias consequatur?"
    }
]

const HeroImage =({data})=>{

    return(
        <div className={styles.heroContentWrapper}>
             <img src={data.image} alt="" />
             <div className={styles.heroText}>
            
              <h2>{data.title}</h2>
              <p>
               {data.desc}
              </p>
              <button className={styles.herobtn}>Know More</button>
             </div>
        </div>
    )
}

const Hero = () => {
  return (
    <div className={styles.wrapper}>

      <Carousel data={data} renderCardComponent={(ele)=> <HeroImage data={ele} slidesView={1}/>}/>
   </div>
  )
}

export default Hero
