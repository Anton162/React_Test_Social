import React from "react";
import style_navigation from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={style_navigation.nav}>
      <div className={style_navigation.item}>
        <NavLink to="/profile" activeClassName={style_navigation.activeLink}>
          Profile
        </NavLink>
      </div>
      <div
        className={`${style_navigation.item} ${style_navigation.activeLink}`}
      >
        <NavLink to="/dialogs" activeClassName={style_navigation.activeLink}>
          {" "}
          Messages
        </NavLink>
      </div>

      <div className={style_navigation.item}>
        <NavLink to="#s">News</NavLink>
      </div>

      <div className={style_navigation.item}>
        <NavLink to="#s">Foto</NavLink>
      </div>

      <div className={style_navigation.item}>
        <NavLink to="#s">Videos</NavLink>
      </div>

      <div className={style_navigation.item}>
        <NavLink to="#s">Music</NavLink>
      </div>
      <div className={style_navigation.item}>
        <NavLink to="#s">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
