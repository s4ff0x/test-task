import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BACKEND_HOST } from '@/shared/api';
import { functionMap, generateQueryString } from '../lib.ts';
import {
  CurrencyExchangeData,
  AggregatedAVCoreStockParams,
  StockData,
  AVParamsCoreStockSymbol,
  AVParamsCrypto,
} from '../types.ts';

export const alphaVantageApi = createApi({
  reducerPath: 'alphaVantageApi',

  // TODO: replace baseUrl with env var, currently like this because of deploy to netlify
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
      transformResponse(baseQueryReturnValue: StockData) {
        const data = baseQueryReturnValue;
        data['Time Series'] = Object.values(data)[1];
        return data;
      },
    }),
    getAVDataCrypto: builder.query<CurrencyExchangeData, AVParamsCrypto>({
      query: params => {
        const queryParams = { ...params };
        queryParams.apikey = API_KEY;
        queryParams.function = functionMap.CURRENCY_EXCHANGE_RATE;
        return `query?${generateQueryString(queryParams)}`;
      },
    }),
    getAVDataCoreStockSymbol: builder.query<StockData, AVParamsCoreStockSymbol>( // WIP
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

export const { useGetAVDataCoreStockQuoteQuery, useGetAVDataCryptoQuery } =
  alphaVantageApi;
