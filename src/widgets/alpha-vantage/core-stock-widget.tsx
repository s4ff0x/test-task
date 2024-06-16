import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';
import { useState } from 'react';
import { useGetAVDataCoreStockQuoteQuery } from '@/entities/alpha-vantage';
import { CoreStockChart } from '@/features/alpha-vantage/core-stock-chart';
import {
  CoreStockParamForm,
  FormData,
} from '@/features/alpha-vantage/core-stock-param-form';

const CoreStockWidget = () => {
  const [params, setParams] = useState<FormData>({
    symbol: '',
    interval: '',
    function: '',
  });

  const skip = !params.symbol || !params.function || !params.interval;

  const { data, isLoading } = useGetAVDataCoreStockQuoteQuery(
    {
      ...params,
    },
    {
      skip,
    }
  );
  const canShowChart = !!data?.['Time Series'];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-2">
        <CoreStockParamForm onSubmit={formData => setParams(formData)} />
      </div>
      {canShowChart && (
        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Chart</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <CoreStockChart data={data} />
          </CardContent>
        </Card>
      )}
      {isLoading && (
        <div className="col-span-5 flex flex-col space-y-3">
          <Skeleton className="h-[125px] col-span-5 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 col-span-5" />
            <Skeleton className="h-4 col-span-5" />
          </div>
        </div>
      )}
    </div>
  );
};
export default CoreStockWidget;
