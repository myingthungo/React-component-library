import React from "react";
import styles from "./Square/badgelist.module.css"; // Import CSS module

export default function Badge({
  color,
  backgroundColor,
  pill = false,
  children,
}) {
  return (
    <span
      className={`${styles.badge} ${pill ? styles.pill : ""}`} // Apply styles from module
      style={{ color: color, backgroundColor: backgroundColor, border: "none" }}
    >
      {children}
    </span>
  );
}
