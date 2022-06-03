import { lazy } from "react";

export { Loader } from "./loader/Loader";
export { Navbar } from "./navbar/Navbar";
export const Home = lazy(async () =>
  import("./home/Home").then((module) => ({ default: module.Home }))
);
export const News = lazy(async () =>
  import("./news/News").then((module) => ({ default: module.News }))
);
export const CryptoCurrencies = lazy(async () =>
  import("./cryptoCurrencies/CryptoCurrencies").then((module) => ({
    default: module.CryptoCurrencies,
  }))
);
export const CoinDetails = lazy(async () =>
  import("./coinDetails/CoinDetails").then((module) => ({
    default: module.CoinDetails,
  }))
);

export const Exchanges = lazy(async () =>
  import("./exchanges/Exchanges").then((module) => ({
    default: module.Exchanges,
  }))
);
