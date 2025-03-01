import React from "react";
import styles from "./container.module.css";
import profileImage from "../images/profile.png"; // Adjust path accordingly
import quote from "../images/quote.png"; // Adjust path accordingly

export default function TestimonialDisplay() {
  return (
    <div className={styles.mainContainer}>
      {/* White background section with cropped image */}
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Profile" className={styles.heroImage} />
      </div>

      {/* Blue background section with text */}
      <div className={styles.textContainer}>
        <img src={quote} alt="Quote Icon" className={styles.quoteIcon} />
        <p className={styles.quote}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </p>
        <p className={styles.author}>May Anderssons</p>
        <p className={styles.position}>Workcation, CTO</p>
      </div>
    </div>
  );
}
