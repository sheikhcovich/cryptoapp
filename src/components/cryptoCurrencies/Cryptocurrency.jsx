import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import styles from "./cryptocurrencies.module.css";
const Cryptocurrency = ({
  crypto: { uuid, name, rank, iconUrl, price, marketCap, change },
}) => {
  return (
    <Link to={`/coin/${uuid}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <span>{`${rank}. ${name}`}</span>
          <img className={styles.icon} src={iconUrl} alt={name} />
        </div>
      </div>
      <div className={styles.cardDetails}>
        <p>{`price: ${millify(price ? price : "0")}`}</p>
        <p>{`marketCap: ${millify(marketCap ? marketCap : "0")}`}</p>
        <p>{`change: ${millify(change ? change : "0")}%`}</p>
      </div>
    </Link>
  );
};

export default Cryptocurrency;
