import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BACKEND_HOST,
  API_KEY,
  AggregatedAVCoreStockParams,
  StockData,
  AVParamsCoreStockSymbol,
} from '@/shared/api';
import { functionMap, generateQueryString } from '../lib.ts';

export const alphaVantageApi = createApi({
  reducerPath: 'alphaVantageApi',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_HOST }),
  endpoints: builder => ({
    getAVDataCoreStockQuote: builder.query<
      StockData,
      AggregatedAVCoreStockParams
    >({
      query: params => {
        const queryParams = { ...params };
        queryParams.apikey = API_KEY;
        return `query?${generateQueryString(queryParams)}`;
      },
    }),
    getAVDataCoreStockSymbol: builder.query<StockData, AVParamsCoreStockSymbol>(
      {
        query: params => {
          const queryParams = { ...params };
          queryParams.function = functionMap.SYMBOL_SEARCH;
          queryParams.apikey = API_KEY;
          return `query?${generateQueryString(queryParams)}`;
        },
      }
    ),
  }),
});

export const {
  useGetAVDataCoreStockQuoteQuery,
  useGetAVDataCoreStockSymbolQuery,
} = alphaVantageApi;
