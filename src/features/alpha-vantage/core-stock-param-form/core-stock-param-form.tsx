import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared/ui';
import { functions, intervals, symbols } from '@/entities/alpha-vantage';

const FormSchema = z.object({
  symbol: z.string().min(1, {
    message: 'Symbol must be selected.',
  }),
  function: z.string().min(1, {
    message: 'Function must be selected.',
  }),
  interval: z.string().min(1, {
    message: 'Interval must be selected.',
  }),
});

export type FormData = z.infer<typeof FormSchema>;

export interface CoreStockFormProps {
  onSubmit: (formData: FormData) => void;
}

export function CoreStockParamForm({ onSubmit }: CoreStockFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      symbol: '',
      function: '',
      interval: '',
    },
  });

  function onSubmitForm(data: FormData) {
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="symbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Symbol</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a symbol" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {symbols.map(symbol => (
                    <SelectItem value={symbol} key={symbol}>
                      {symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interval</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an interval" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {intervals.map(interval => (
                    <SelectItem value={interval} key={interval}>
                      {interval}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="function"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Function</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a function" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {functions.map(f => (
                    <SelectItem value={f} key={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Apply</Button>
      </form>
    </Form>
  );
}
