import millify from "millify";
import React from "react";
import styles from "./statistics.module.css";

const Statistics = ({
  stats: {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  },
}) => {
  const statistics = [
    { name: "Total CryptCurrencies", amount: totalCoins },
    { name: "Total Exchanges", amount: totalExchanges },
    { name: "Total Market Cap", amount: totalMarketCap },
    { name: "Total 24h Volume", amount: total24hVolume },
    { name: "Total Markets", amount: totalMarkets },
  ];
  return (
    <div className={styles.statistics}>
      <h2> Global Crypto Stats </h2>
      <div className={styles.statisticsRow}>
        {statistics.map(({ name, amount }, id) => (
          <div className={styles.statsItem} key={id}>
            <span>{name}</span>
            <p>{millify(amount)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
