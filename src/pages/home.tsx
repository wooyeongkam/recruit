import { getLicense } from '@/apis/enablement';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [value, setValue] = useState<number>();

  const fetchData = async () => {
    const data = await getLicense();

    setValue(data.id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>{value}</div>
      <div className='flex flex-col'>
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            confirm
          </label>
        </div>

        <Button>Next</Button>
      </div>
    </div>
  );
};
