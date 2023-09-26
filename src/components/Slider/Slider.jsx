import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import rightarrow from "../../images/Icons/RightArrow.svg";
import Carousel from "../Carousel/Carousel";


const data = [
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla eum quasi aliquam provident alias quibusdam cupiditate unde natus in.",
  },
];

const Card = ({ele}) => {
  return (
    <div className={styles.cardWrapper}>
      <h3>{ele.title}</h3>
      <p>
      {ele.desc}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <h4 className={styles.cardBtn}>Know More</h4>{" "}
        <span>
          <img src={rightarrow} alt="" height="22px" width="22px"  style={{filter:"invert(100%)"}}/>
        </span>
      </div>
    </div>
  );
};

const Slider = () => {
 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidesView, setSlidesView] = useState(screenWidth < 768 ? 2 : 3);

 
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

   
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    
  }, []);


  useEffect(() => {
    
      setSlidesView(screenWidth < 768 ? 2 : 3);
   
    
  }, [screenWidth]);
  return (
    <div className={styles.wrapper}>
        <Carousel data={data} renderCardComponent={(ele)=> <Card ele={ele} />}   slidesView={slidesView}/>
    </div>
  );
};

export default Slider;
