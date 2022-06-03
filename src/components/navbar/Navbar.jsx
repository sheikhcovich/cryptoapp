import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  MoneyRounded,
  NewReleases,
  RotateRightOutlined,
} from "@material-ui/icons";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          width="30px"
          height="30px"
          src={require(`../navbar/iamges/cryptocurrency.png`)}
          alt=""
        />
        <h3 className={styles.logo}>Crypto</h3>
      </div>
      <div className={styles.links}>
        <NavLink className={styles.link} to="/">
          <HomeOutlined /> <span>Home</span>
        </NavLink>
        <NavLink className={styles.link} to="/cryptocurrencies">
          <MoneyRounded /> <span>Cryptocurrencies</span>
        </NavLink>
        <NavLink className={styles.link} to="/exchanges">
          <RotateRightOutlined /> <span>Exchanges</span>
        </NavLink>
        <NavLink className={styles.link} to="/news">
          <NewReleases /> <span>News</span>
        </NavLink>
      </div>
    </div>
  );
};
