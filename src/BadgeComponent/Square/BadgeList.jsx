import React from "react";
import Badge from "../Badge";
import styles from "./badgelist.module.css";

export default function BadgeList() {
  const colors = [
    { hex: "#1F2937", name: "Badge" }, // Text color
    { hex: "#991B1B", name: "Badge" },
    { hex: "#92400E", name: "Badge" },
    { hex: "#065F46", name: "Badge" },
    { hex: "#1E40AF", name: "Badge" },
    { hex: "#3730A3", name: "Badge" },
    { hex: "#5B21B6", name: "Badge" },
    { hex: "#9D174D", name: "Badge" },
  ];

  const backgroundColors = [
    "rgba(243, 244, 246, 0.4)", // Light Gray
    "rgba(153, 27, 27, 0.4)", // Red
    "rgba(146, 64, 14, 0.4)", // Orange
    "rgba(6, 95, 70, 0.4)", // Green
    "rgba(30, 64, 175, 0.4)", // Blue
    "rgba(55, 48, 163, 0.4)", // Indigo
    "rgba(91, 33, 182, 0.4)", // Purple
    "rgba(157, 23, 77, 0.4)", // Pink
  ];

  return (
    <>
      <div className={styles.list}>
        <h3 className={styles.square}>Square</h3>
        {colors.map((color, index) => (
          <div key={index} className={styles.badgeContainer}>
            <Badge
              color={color.hex}
              backgroundColor={backgroundColors[index]}
              pill={false}
            >
              {color.name}
            </Badge>
          </div>
        ))}
      </div>

      <div className={styles.list}>
        <h3 className={styles.square}>Pill</h3>
        {colors.map((color, index) => (
          <div key={index} className={styles.badgeContainer}>
            <Badge
              color={color.hex}
              backgroundColor={backgroundColors[index]}
              pill={true}
            >
              {color.name}
            </Badge>
          </div>
        ))}
      </div>
    </>
  );
}
