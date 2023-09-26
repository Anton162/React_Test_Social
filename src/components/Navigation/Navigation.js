import React from "react";
import style_navigation from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style_navigation.nav}>
      <div>
        <a
          href="#s"
          className={`${style_navigation.item} ${style_navigation.active}`}
        >
          Profile
        </a>
      </div>
      <div className={style_navigation.item}>
        <a href="#s"> Messages</a>
      </div>

      <div className={style_navigation.item}>
        <a href="#s">News</a>
      </div>

      <div className={style_navigation.item}>
        <a href="#s">Foto</a>
      </div>

      <div className={style_navigation.item}>
        <a href="#s">Videos</a>
      </div>

      <div className={style_navigation.item}>
        <a href="#s">Music</a>
      </div>
      <div className={style_navigation.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Navigation;
