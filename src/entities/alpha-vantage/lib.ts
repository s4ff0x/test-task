import { AggregatedAVCoreStockParams } from './types.ts';

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
};

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
