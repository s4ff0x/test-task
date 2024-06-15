import { AggregatedAVCoreStockParams, Interval } from './types.ts';

export const generateQueryString = (
  params: AggregatedAVCoreStockParams
): string => {
  const queryParams = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {} as Record<string, string>
    )
  );
  return queryParams.toString();
};

export const functionMap = {
  TIME_SERIES_DAILY_ADJUSTED: 'TIME_SERIES_DAILY_ADJUSTED',
  TIME_SERIES_INTRADAY: 'TIME_SERIES_INTRADAY',
  SYMBOL_SEARCH: 'SYMBOL_SEARCH',
  CURRENCY_EXCHANGE_RATE: 'CURRENCY_EXCHANGE_RATE',
};

// @todo: in real app fetch symbols and other values from api
export const symbols = [
  'JBLU',
  'JBND',
  'JBSS',
  'JBT',
  'JCE',
  'JCHI',
  'JCI',
  'JCICU',
  'JCPB',
  'JCPI',
  'JCSE',
  'JCTCF',
  'JCTR',
  'JD',
  'JDOC',
  'JDST',
  'JDVI',
  'JDZG',
  'JEF',
  'JELD',
  'JEMA',
  'JEMD',
  'JEPI',
  'JEPQ',
  'JEPY',
  'JEQ',
];

export const intervals: Interval[] = [
  '1min',
  '5min',
  '15min',
  '30min',
  '60min',
];
export const functions = [functionMap.TIME_SERIES_INTRADAY];

export const cryptoCurrencies = ['USD', 'EUR', 'CAD', 'AED', 'GBP', 'JPY'];
