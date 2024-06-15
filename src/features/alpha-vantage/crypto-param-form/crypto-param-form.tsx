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
import { cryptoCurrencies } from '@/entities/alpha-vantage';

const FormSchema = z.object({
  from_currency: z.string().min(1, {
    message: 'From currency must be a string',
  }),
  to_currency: z.string().min(1, {
    message: 'To currency must be a string',
  }),
});

export type CryptoFormData = z.infer<typeof FormSchema>;

export interface CryptoFormProps {
  onSubmit: (formData: CryptoFormData) => void;
}

export function CryptoParamForm({ onSubmit }: CryptoFormProps) {
  const form = useForm<CryptoFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      from_currency: '',
      to_currency: '',
    },
  });

  function onSubmitForm(data: CryptoFormData) {
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="from_currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select from currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cryptoCurrencies.map(cur => (
                    <SelectItem value={cur} key={cur}>
                      {cur}
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
          name="to_currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select to currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cryptoCurrencies.map(cur => (
                    <SelectItem value={cur} key={cur}>
                      {cur}
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
