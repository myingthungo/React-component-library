import React, { createContext, useContext } from "react";
import styles from "./alertRender.module.css"; // ✅ Changed "Styles" to "styles"
import { FaExclamationTriangle } from "react-icons/fa";
import { IoWarning, IoCloseCircleOutline } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Creating Alert Context
const AlertContext = createContext();

// Alert Icons
const alertIcons = {
  success: (
    <FontAwesomeIcon
      className={styles.checkIcon}
      icon={faCircleCheck}
      style={{ color: "#63E6BE" }}
    />
  ),
  warning: (
    <FaExclamationTriangle
      className={styles.warningIcon}
      style={{ color: "#FFD43B" }}
    />
  ),
  error: (
    <IoCloseCircleOutline
      className={styles.errorIcon}
      style={{ color: "#FA5252" }}
    />
  ),
  info: (
    <FaCircleInfo className={styles.infoIcon} style={{ color: "#339AF0" }} />
  ),
};

// Alert Component Wrapper
export function Alert({ type, children }) {
  const alertClasses = {
    success: styles.success,
    warning: styles.warningContainer,
    error: styles.errorContainer,
    info: styles.neutralContainer,
  };

  return (
    <AlertContext.Provider value={{ type }}>
      <div className={`${styles.alertContainer} ${alertClasses[type]}`}>
        {children}
      </div>
    </AlertContext.Provider>
  );
}

// Alert Title
export function AlertTitle({ children }) {
  const { type } = useContext(AlertContext);
  const titleClasses = {
    success: styles.successText,
    warning: styles.warningText,
    error: styles.errorText,
    info: styles.neutralText,
  };

  return <h3 className={titleClasses[type]}>{children}</h3>;
}

// Alert Message
export function AlertMessage({ children }) {
  const { type } = useContext(AlertContext);
  const bgClasses = {
    success: styles.greenBackground,
    warning: styles.yellowBackground,
    error: styles.errorBackground,
    info: styles.neutralBackground,
  };

  return (
    <div className={bgClasses[type]}>
      <span className={styles.alertMessage}>
        {alertIcons[type]}
        {children}
      </span>
    </div>
  );
}

// Alert Description
export function AlertDescription({ children }) {
  const { type } = useContext(AlertContext);
  const descriptionClasses = {
    success: styles.alertDescription,
    warning: styles.warningDescription,
    error: styles.errorDescription,
    info: styles.neutralDescription,
  };

  return <p className={descriptionClasses[type]}>{children}</p>;
}
