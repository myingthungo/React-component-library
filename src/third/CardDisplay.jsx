import React from "react";
import Card from "./Card";
import { CardImage, CardTitle, CardText } from "./CardComponents";
import Styles from "./cardDisplay.module.css";

export default function CardDisplay() {
  return (
    <div className={Styles.cardBackground}>
      <Card>
        <CardImage
          src="./src/images/Uploadicon.png"
          alt="logo"
          className={Styles.UploadImage}
        />
        <CardTitle>
          <h3 className={Styles.title}>Easy Deployment</h3>
        </CardTitle>
        <CardText>
          <p className={Styles.Cardpara}>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </p>
        </CardText>
      </Card>
    </div>
  );
}
