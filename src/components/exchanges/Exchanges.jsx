import styles from "./exchanges.module.css";

import React, { useState } from "react";
import { useGetCryptoExchangeQuery } from "../../services/cryptoExchangesApi";
import Head from "./Head";
import Body from "./Body";
import { Loader } from "../loader/Loader";
import { useScrollToTop } from "../scrollToUp";
export const Exchanges = () => {
  const [desc, setDesc] = useState({
    name: false,
    trade_volume_24h_btc: false,
    markets: false,
    open_interest_btc: false,
    sortingValue: "trade_volume_24h_btc",
    orderBy: "desc",
  });
  useScrollToTop();

  let order = desc.orderBy;
  const handleSorting = (e) => {
    const temp = e.currentTarget.id;
    order =
      temp === desc.sortingValue ? (order === "asc" ? "desc" : "asc") : order;
    const val = desc[temp];
    setDesc((prev) => ({
      ...prev,
      [temp]: !val,
      sortingValue: temp,
      orderBy: order,
    }));
  };
  const { data, isFetching } = useGetCryptoExchangeQuery({
    nameOrder: `${desc.sortingValue}_${desc.orderBy}`,
  });

  if (isFetching) return <Loader />;

  return (
    <div className={styles.tableContaineir}>
      <table cellSpacing="0">
        <Head desc={desc} handleSorting={handleSorting} />
        <Body data={data} />
      </table>
    </div>
  );
};
