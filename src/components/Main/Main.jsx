import React from "react";
import MainIcons from "../MainIcons/MainIcons";
import MainTitle from "../MainTitle/MainTitle";
import MainImage from "../MainImages/MainImage";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <MainIcons />
      <article>
        <MainTitle />
        <MainImage />
      </article>
      <image></image>
    </main>
  );
};

export default Main;
