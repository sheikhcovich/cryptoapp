import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: apiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCoinDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
    getCoinHistory: builder.query({
      query: ({ id, timePeriod }) =>
        createRequest(`/coin/${id}/history?timePeriod=${timePeriod}`),
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} = cryptoApi;
