// Core Stock
export interface AVParams {
  function?: string;
  apikey?: string;
}
export interface AVParamsCoreStockQuote extends AVParams {
  symbol: string;
  datatype?: 'json' | 'csv';
}
export type Interval = '1min' | '5min' | '15min' | '30min' | '60min';
export interface AVParamsCoreStockIntraday extends AVParams {
  symbol: string; // Required
  interval: Interval; // Required
  adjusted?: boolean; // Optional
  extended_hours?: boolean; // Optional
  month?: string; // Optional, format YYYY-MM
  outputsize?: 'compact' | 'full'; // Optional
  datatype?: 'json' | 'csv'; // Optional
}

export type AggregatedAVCoreStockParams =
  | AVParamsCoreStockQuote
  | AVParamsCoreStockIntraday
  | AVParamsCoreStockSymbol
  | AVParamsCrypto;

export interface AVParamsCoreStockSymbol extends AVParams {
  keywords: string;
  datatype?: 'json' | 'csv';
}

interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
}

interface TimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

interface TimeSeries {
  [timestamp: string]: TimeSeriesData;
}

export interface StockData {
  'Meta Data': MetaData;
  'Time Series': TimeSeries;
}

// Crypto

export interface AVParamsCrypto extends AVParams {
  from_currency?: string;
  to_currency?: string;
}

interface RealtimeCurrencyExchangeRate {
  '1. From_Currency Code': string;
  '2. From_Currency Name': string;
  '3. To_Currency Code': string;
  '4. To_Currency Name': string;
  '5. Exchange Rate': string;
  '6. Last Refreshed': string;
  '7. Time Zone': string;
  '8. Bid Price': string;
  '9. Ask Price': string;
}

export interface CurrencyExchangeData {
  'Realtime Currency Exchange Rate': RealtimeCurrencyExchangeRate;
}
