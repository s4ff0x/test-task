import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';
import { useState } from 'react';
import { useGetAVDataCryptoQuery } from '@/entities/alpha-vantage';

import {
  CryptoFormData,
  CryptoParamForm,
} from '@/features/alpha-vantage/crypto-param-form';

export const CryptoWidget = () => {
  const [params, setParams] = useState<CryptoFormData>({
    from_currency: '',
    to_currency: '',
  });

  const skip = !params.from_currency || !params.to_currency;

  const { data, isLoading } = useGetAVDataCryptoQuery(
    {
      ...params,
    },
    {
      skip,
    }
  );
  const canShowCryptoInfo = data?.['Realtime Currency Exchange Rate'];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-2">
        <CryptoParamForm onSubmit={formData => setParams(formData)} />
      </div>
      {canShowCryptoInfo && (
        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Exchange Rate</CardTitle>
          </CardHeader>
          <CardContent className="pl-5">
            {Object.entries(data?.['Realtime Currency Exchange Rate']).map(
              ([key, value]) => (
                <h3 key={key}>
                  {key} - {value}
                </h3>
              )
            )}
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
