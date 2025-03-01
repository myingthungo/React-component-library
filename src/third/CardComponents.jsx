import React from "react";

export function CardImage({ src, alt }) {
  return <img src={src} alt={alt} className={"cardImage"} />;
}

export function CardTitle({ children }) {
  return <h3 className={"cardTitle"}>{children}</h3>;
}

export function CardText({ children }) {
  return <p className={"cardText"}>{children}</p>;
}
