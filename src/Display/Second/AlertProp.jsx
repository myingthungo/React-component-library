import React from "react";
import Styles from "./alertRender.module.css";

export default function AlertProp({ children }) {
  return <div className={Styles.alertTitle}>{children}</div>;
}
