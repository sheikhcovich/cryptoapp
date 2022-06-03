import { ArrowUpward } from "@material-ui/icons";
import styles from "./exchanges.module.css";

const Head = ({ desc, handleSorting }) => {
  return (
    <thead>
      <tr>
        <td>
          <ArrowUpward
            id="name"
            className={`${styles.arrowUpward} ${
              desc.name ? styles.desc : null
            }`}
            onClick={(e) => handleSorting(e)}
          />
          <span>Exchanges</span>
        </td>
        <td>
          <ArrowUpward
            id="trade_volume_24h_btc"
            className={`${styles.arrowUpward} ${
              desc.trade_volume_24h_btc ? styles.desc : null
            }`}
            onClick={(e) => handleSorting(e)}
          />
          <span>24h Trade Volume</span>
        </td>
        <td>
          <ArrowUpward
            id="markets"
            className={`${styles.arrowUpward} ${
              desc.markets ? styles.desc : null
            }`}
            onClick={(e) => handleSorting(e)}
          />
          <span>Markets</span>
        </td>
        <td>
          <ArrowUpward
            id="open_interest_btc"
            className={`${styles.arrowUpward} ${
              desc.open_interest_btc ? styles.desc : null
            }`}
            onClick={(e) => handleSorting(e)}
          />
          <span>Interest In BTC</span>
        </td>
      </tr>
    </thead>
  );
};
export default Head;
