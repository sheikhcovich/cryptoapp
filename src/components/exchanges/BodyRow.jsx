import React from "react";
import styles from "./exchanges.module.css";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
const BodyRow = ({
  data: {
    id,
    name,
    image,
    url,
    trade_volume_24h_btc,
    open_interest_btc,
    number_of_perpetual_pairs,
    description,
  },
}) => {
  const handleDisplay = (e) => {
    const active = styles.active;
    e.currentTarget.classList.toggle(active);
  };
  return (
    <>
      <tr id={id} onClick={handleDisplay}>
        <td>
          <div className={styles.linkContainer}>
            <img src={image} alt="market" />
            <a href={url} target="_blank" rel="noreferrer">
              <span>{name}</span>
            </a>
          </div>
        </td>
        <td>{millify(trade_volume_24h_btc ? trade_volume_24h_btc : "0")}</td>
        <td>{number_of_perpetual_pairs}</td>
        <td>{millify(open_interest_btc || "0")}</td>
      </tr>
      <tr className={styles.exchangeDesc}>
        <td colSpan="4">
          <div>
            {description ? (
              HTMLReactParser(description)
            ) : (
              <span style={{ textTransform: "uppercase" }}>
                Ther is no description
              </span>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default BodyRow;
