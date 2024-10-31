import { Loader2 } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col bg-white py-2 w-8/12 rounded-lg gap-3 justify-center items-center'>
      <Loader2 className='size-8 text-blue-500 animate-spin' />
      <span className='text-blue-600 text-[22px] font-bold'>لطفا صبر کنید . . .</span>
    </div>
  );
};

export default Loading;
