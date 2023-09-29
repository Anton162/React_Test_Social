import React from "react";
import style_header from "./Header.module.css";

const Header = () => {
  return (
    <header className={style_header.header}>
      <div className={style_header.header_profile}>
        <div>
          <a href="#s">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"></img>
          </a>
        </div>
      </div>
      <div className={style_header.header__buttons}>
        <button className={style_header.button}>Log In</button>
        <button className={style_header.button}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
