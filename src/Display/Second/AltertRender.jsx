import React from "react";
import AlertProp from "./AlertProp";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoWarning, IoCloseCircleOutline } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Styles from "./alertRender.module.css";

export default function AlertRender() {
  const alertIcons = {
    success: (
      <FontAwesomeIcon
        className={Styles.checkIcon}
        icon={faCircleCheck}
        style={{ color: "#63E6BE" }}
      />
    ),
    warning: (
      <FaExclamationTriangle
        className={Styles.warningIcon}
        style={{ color: "#FFD43B" }}
      />
    ),
    error: (
      <IoCloseCircleOutline
        className={Styles.errorIcon}
        style={{ color: "#FA5252" }}
      />
    ),
    info: (
      <FaCircleInfo className={Styles.infoIcon} style={{ color: "#339AF0" }} />
    ),
  };
  return (
    <>
      <div className={Styles.alertContainer}>
        <span className={Styles.success}>
          <h3 className={Styles.successText}>Success</h3>
          <span
            className={`${Styles.alertBackground} ${Styles.greenBackground}`}
          >
            <AlertProp>
              <span className={Styles.alertMessage}>
                {alertIcons.success}
                <span className={Styles.congratsText}>Congratulations!</span>
              </span>
            </AlertProp>

            <p className={Styles.alertDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam..
            </p>
          </span>
        </span>
      </div>

      <div className={Styles.warningContainer}>
        <div className={Styles.warningHeader}>
          <h3 className={Styles.warningText}>Warning</h3>
          <span
            className={`${Styles.alertBackground} ${Styles.yellowBackground}`}
          >
            <AlertProp>
              {alertIcons.warning}
              <span className={Styles.attentionLetter}>Attention!</span>
            </AlertProp>
            <p className={Styles.warningDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum..
            </p>
          </span>
        </div>
      </div>

      <div className={Styles.errorContainer}>
        <div className={Styles.errorHeader}>
          <h3 className={Styles.errorText}>Error</h3>
          <div
            className={`${Styles.alertBackground} ${Styles.errorBackground}`}
          >
            <AlertProp className={Styles.errorMessage}>
              {alertIcons.error}
              <span className={Styles.errorLetter}>
                There is a problem with your application
              </span>
            </AlertProp>
          </div>
        </div>

        <p className={Styles.errorDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </div>

      <div className={Styles.neutralContainer}>
        <div className={Styles.neutralHeader}>
          <h3 className={Styles.neutralText}>Neutral</h3>
          <div
            className={`${Styles.alertBackground} ${Styles.neutralBackground}`}
          >
            <AlertProp>
              {alertIcons.info}
              <span className={Styles.neutralMessage}>Update available</span>
            </AlertProp>
          </div>
        </div>

        <p className={Styles.neutralDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam..
        </p>
      </div>
    </>
  );
}
