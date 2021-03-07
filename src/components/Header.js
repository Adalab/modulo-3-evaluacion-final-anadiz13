import React from "react";
import photo from "../images/RickandMorty.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <div className="header__img">
      <img src={photo} alt="rick and morty" />
    </div>
  );
}

export default Header;
