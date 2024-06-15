import * as React from 'react';
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui';
import { cn } from '@/shared/lib/utils.ts';
import {
  symbols,
  // useGetAVDataCoreStockSymbolQuery, // @todo: implement after mvp
} from '@/entities/alpha-vantage';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

export function SymbolSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  // const [keywords, setKeywords] = React.useState('');

  // @todo: make debounce (also can't properly debug because of limit for free api key)
  // const { data, error, isLoading } = useGetAVDataCoreStockSymbolQuery({
  //   keywords,
  // });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {value ? symbols.find(s => s === value) : 'Select symbol...'}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search symbol..."
            className="h-9"
            // onInput={e => setKeywords(e.currentTarget.value)}
          />
          <CommandList>
            <CommandEmpty>No symbol found.</CommandEmpty>
            <CommandGroup>
              {symbols.map(symbol => (
                <CommandItem
                  key={symbol}
                  value={symbol}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  {symbol}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === symbol ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
