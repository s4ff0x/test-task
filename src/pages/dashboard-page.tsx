import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui';
import { lazy, useState } from 'react';

// lazy loading of components
const CoreStockWidget = lazy(
  () => import('@/widgets/alpha-vantage/core-stock-widget')
);
const CryptoWidget = lazy(
  () => import('@/widgets/alpha-vantage/crypto-widget')
);

type Tab = 'coreStock' | 'crypto';

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>('coreStock');
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs
            value={tab}
            className="space-y-4"
            onValueChange={tab => setTab(tab as Tab)}
          >
            <TabsList>
              <TabsTrigger value="coreStock">Core Stock</TabsTrigger>
              <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
            </TabsList>

            <TabsContent value="coreStock" className="space-y-4">
              <CoreStockWidget />
            </TabsContent>
            <TabsContent value="crypto" className="space-y-4">
              <CryptoWidget />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
