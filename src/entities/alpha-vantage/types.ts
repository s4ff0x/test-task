// Core Stock
export interface AVParams {
  function?: string;
  apikey?: string;
}
export interface AVParamsCoreStockQuote extends AVParams {
  symbol: string;
  datatype?: 'json' | 'csv';
}
export interface AVParamsCoreStockIntraday extends AVParams {
  symbol: string; // Required
  interval: '1min' | '5min' | '15min' | '30min' | '60min'; // Required
  adjusted?: boolean; // Optional
  extended_hours?: boolean; // Optional
  month?: string; // Optional, format YYYY-MM
  outputsize?: 'compact' | 'full'; // Optional
  datatype?: 'json' | 'csv'; // Optional
}

export type AggregatedAVCoreStockParams =
  | AVParamsCoreStockQuote
  | AVParamsCoreStockIntraday
  | AVParamsCoreStockSymbol;

export interface AVParamsCoreStockSymbol extends AVParams {
  keywords: string;
  datatype?: 'json' | 'csv';
}

interface MetaData {
  Information: string;
  Symbol: string;
  LastRefreshed: string;
  Interval: string;
  OutputSize: string;
  TimeZone: string;
}

interface TimeSeriesEntry {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface TimeSeries {
  [timestamp: string]: TimeSeriesEntry;
}

export interface StockData {
  MetaData: MetaData;
  TimeSeries: TimeSeries;
}
