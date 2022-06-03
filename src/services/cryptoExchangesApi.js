import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
  "x-rapidapi-key": "f31d9de98emshe5c99dd27b83d43p142783jsnebec35dba347",
};
const baseUrl = "https://api.coingecko.com/api/v3";
const createRequest = (url) => ({ url });
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
