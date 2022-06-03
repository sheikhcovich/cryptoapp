import React from "react";
import styles from "./home.module.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Statistics from "./statistics/Statistics";
import { Link } from "react-router-dom";
import { CryptoCurrencies } from "../cryptoCurrencies/CryptoCurrencies";
import { News } from "../news/News";
import { Loader } from "../loader/Loader";
import { useScrollToTop } from "../scrollToUp";
export const Home = () => {
  const { data, error, isLoading } = useGetCryptosQuery(10);
  useScrollToTop();
  if (isLoading) return <Loader />;

  return (
    <>
      {error ? (
        <div>{error?.message}</div>
      ) : (
        <>
          <Statistics stats={data.data.stats} />
          <div className={styles.topTen}>
            <h2>Top 10 CryptoCurrencies In The World</h2>
            <Link className={styles.link} to="/cryptocurrencies">
              Show More
            </Link>
          </div>
          <CryptoCurrencies simple />
          <div className={styles.Containerlink2}>
            <Link className={styles.link2} to="/cryptocurrencies">
              Show More
            </Link>
          </div>
          <div className={styles.topTen}>
            <h2>Latest News</h2>
            <Link className={styles.link} to="/news">
              Show More
            </Link>
          </div>
          <News simple />
          <div className={styles.Containerlink2}>
            <Link className={styles.link2} to="/cryptocurrencies">
              Show More
            </Link>
          </div>
        </>
      )}
    </>
  );
};
