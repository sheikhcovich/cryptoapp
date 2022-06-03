import {
  CheckOutlined,
  ConfirmationNumberOutlined,
  ExplicitOutlined,
  ExplicitTwoTone,
  FormatUnderlinedOutlined,
  MoneyOff,
  MoneyOutlined,
  StopOutlined,
  ThumbDownRounded,
  TramOutlined,
} from "@material-ui/icons";
import styles from "./coinDetails.module.css";
import millify from "millify";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} from "../../services/cryptoApi";
import HTMLReactParser from "html-react-parser";
import LineChart from "./lineChart/LineChart";
import { Loader } from "../loader/Loader";
import { useScrollToTop } from "../scrollToUp";

export const CoinDetails = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetCoinDetailsQuery(id);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const [timePeriod, setTimePeriod] = useState("7d");
  const navigate = useNavigate();
  useScrollToTop();

  const { data: history } = useGetCoinHistoryQuery({
    id,
    timePeriod,
  });
  if (isFetching) return <Loader />;
  if (error) {
    return (
      <div className={styles.error}>
        <span>No Such Crypto With This ID</span>
        <button
          onClick={() => navigate("/cryptocurrencies", { replace: true })}
        >
          Search for a valid currency
        </button>
      </div>
    );
  }
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <MoneyOutlined />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <ConfirmationNumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
      icon: <ThumbDownRounded />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <MoneyOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TramOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FormatUnderlinedOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyOff />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExplicitTwoTone />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExplicitOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExplicitTwoTone />,
    },
  ];

  return (
    <>
      <h1
        className={styles.header}
      >{`${cryptoDetails.name} (${cryptoDetails.symbol}) Price`}</h1>
      <p className={styles.desc}>
        {` ${cryptoDetails.name} live price in US dollars,view value statistics,
        market cap and supply`}
      </p>
      <select
        className="classic"
        defaultValue="7d"
        onChange={(e) => setTimePeriod(e.target.value)}
      >
        {time.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <LineChart
        width={`${window.screen.width - 100}px`}
        history={history}
        price={millify(cryptoDetails.price)}
        name={cryptoDetails.name}
      />

      <div className={styles.statistics}>
        <StatisticsTaable stats={stats} />
        <StatisticsTaable
          stats={genericStats}
          head="Other statistics"
          subHead="An overview showing the stats of All crypto currencies"
        />
      </div>

      <div className={styles.statistics}>
        <div className={styles.blogsRow}>
          <div className={styles.info}>
            <h2>What is {cryptoDetails.name}</h2>
            <>{HTMLReactParser(cryptoDetails.description)}</>
          </div>
        </div>
        <div className={styles.blogsRow}>
          <h2>{cryptoDetails.name} Links</h2>
          {cryptoDetails.links.map(({ name, type, url }) => (
            <div key={url} className={styles.statsRow}>
              <span className={`${styles.title} ${styles.type}`}>{type}</span>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const StatisticsTaable = ({ stats, head, subHead }) => {
  return (
    <div className={styles.row}>
      <h2>{head || `Other statistics`}</h2>
      <p>
        {subHead || `An overview showing the stats of All crypto currencies`}
      </p>
      {stats.map(({ icon, title, value }) => (
        <div key={title} className={styles.statsRow}>
          <div className={styles.title}>
            <span>{icon}</span> <span>{title}</span>
          </div>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  );
};
