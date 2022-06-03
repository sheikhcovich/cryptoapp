import styles from "./news.module.css";
import React, { useState } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptosNewsQuery } from "../../services/cryptoNewsApi";
import PeaceOfNews from "./PeaceOfNews";
import { Loader } from "../loader/Loader";
import { useScrollToTop } from "../scrollToUp";

export const News = ({ simple }) => {
  const [category, setCategory] = useState("cryptocurrencies");
  const { data, isFetching, error } = useGetCryptosNewsQuery({
    newsCategory: category,
    count: simple ? 6 : 40,
  });
  const { data: cryptoCoins } = useGetCryptosQuery(100);
  useScrollToTop(simple);

  if (isFetching && !simple) return <Loader />;
  if (error) {
    return (
      <div
        style={{
          width: "40%",
          margin: "auto",
          backgroundColor: "darkblue",
          padding: "10px",
          color: "white",
        }}
      >
        Something Went wrong
      </div>
    );
  }

  return (
    <>
      {!simple && (
        <select
          className="classic"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>cryptocurrencies</option>
          {cryptoCoins?.data.coins.map(({ name }) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      )}
      <div className={styles.news}>
        {data?.value.map(
          ({ name, description, image, url, provider, datePublished }) => (
            <PeaceOfNews
              key={name}
              data={{ name, description, image, url, provider, datePublished }}
            />
          )
        )}
      </div>
    </>
  );
};
