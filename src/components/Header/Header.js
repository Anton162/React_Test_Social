import React from "react";
import style_header from "./Header.module.css";

const Header = () => {
  return (
    <header className={style_header.header}>
      <a href="#s">
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"></img>
      </a>
    </header>
  );
};

export default Header;
