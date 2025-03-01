import React from "react";

import "./App.css";

import NavBar from "./Display/Nav/NavBar";
import Badges from "./Display/Badge/Badges";
import BadgeList from "./BadgeComponent/Square/BadgeList";
import Banner from "./Display/Second/Banner";
import AlertDisplay from "./Display/Second/AlertDisplay";
import CardLogo from "./third/CardLogo";
import CardDisplay from "./third/CardDisplay";
import TestimonialName from "./Fourth/TestimonialName";
import TestimonialDisplay from "./Fourth/TestimonialDisplay";
import TestimonialWithoutImage from "./Fourth/TestimonialWithoutImage";

function App() {
  return (
    <>
      <NavBar />
      <Badges />
      <BadgeList />
      <Banner />
      <AlertDisplay />
      <CardLogo />
      <CardDisplay />
      <TestimonialName />
      <TestimonialDisplay />
      <TestimonialWithoutImage />
    </>
  );
}

export default App;
