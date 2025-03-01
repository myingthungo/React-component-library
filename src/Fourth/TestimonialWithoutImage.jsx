import React from "react";
import styles from "./withoutImage.module.css";
import ImageLogo from "../images/workcation.png";

export default function TestimonialWithoutImage() {
  return (
    <div className={styles.NoImageContainer}>
      <div>
        <img src={ImageLogo} alt="logo" className={styles.noImage} />
        <p className={styles.description}>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </p>
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.authorName}>May Andersons</p>
        <p className={styles.path}>/</p>
        <p className={styles.jobTitle}>Workcation, CTO</p>
      </div>
    </div>
  );
}
