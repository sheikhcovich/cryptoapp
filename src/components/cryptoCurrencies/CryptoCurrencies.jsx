import React, { useEffect, useState } from "react";
import styles from "./cryptocurrencies.module.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Cryptocurrency from "./Cryptocurrency";
import { Loader } from "../loader/Loader";
import { useScrollToTop } from "../scrollToUp";

export const CryptoCurrencies = ({ simple }) => {
  const count = simple ? 10 : 100;
  const { data, error, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  let arr = cryptos;
  if (searchItem.trim() === "" && cryptos?.length === 0) {
    arr = data?.data?.coins;
  }

  useEffect(() => {
    if (searchItem.trim() === "" && cryptos?.length !== 0) {
      setCryptos(data?.data?.coins);
      return;
    } else if (searchItem.trim() !== "") {
      const filtered = data?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
      );
      setCryptos(filtered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItem]);
  useScrollToTop(simple);
  console.log(data);

  if (error) return error?.message;
  if (isFetching && !simple) return <Loader />;
  return (
    <div>
      {!simple && (
        <div className={styles.input}>
          <input
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
            placeholder="Search for Cryptocurrency... "
          />
        </div>
      )}
      <div className={styles.coins}>
        {arr?.map(({ uuid, name, rank, iconUrl, price, marketCap, change }) => {
          return (
            <Cryptocurrency
              key={uuid}
              crypto={{ uuid, name, rank, iconUrl, price, marketCap, change }}
            />
          );
        })}
      </div>
    </div>
  );
};
