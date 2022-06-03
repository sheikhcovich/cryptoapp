import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
  "x-rapidapi-key": `${process.env.REACT_APP_EXCHANGE_KEY}`,
};
const baseUrl = "https://api.coingecko.com/api/v3";
const createRequest = (url) => ({ url, apiHeaders });
export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: ({ nameOrder }) =>
        createRequest(`/derivatives/exchanges?order=${nameOrder}`),
    }),
  }),
});
export const { useGetCryptoExchangeQuery } = exchangeApi;
