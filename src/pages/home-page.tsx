import {
  functionMap,
  useGetAVDataCoreStockQuoteQuery,
} from '@/entities/alpha-vantage';

export const HomePage = () => {
  const { data, error, isLoading } = useGetAVDataCoreStockQuoteQuery({
    symbol: 'AAPL',
    interval: '1min',
    adjusted: true,
    extended_hours: true,
    // month: '2009-01',
    outputsize: 'full',
    datatype: 'json',
    function: functionMap.TIME_SERIES_INTRADAY,
  });

  console.log(data);
  return <div>Home Page</div>;
};
