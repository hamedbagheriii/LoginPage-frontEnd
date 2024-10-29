import React, { FC } from 'react';

interface PageLoadingType {
  title?: string;
  target?: string;
  color?: string;
}
const PageLoading: FC<PageLoadingType> = ({ title = 'ورود به', target = 'پنل' , color = 'text-blue-500' }) => {
  return (
    <div className='w-full h-dvh flex flex-col gap-2 text-[25px] justify-center items-center'>
      <span>لطفا صبر کنید . . .</span>
      <span>
        در حال {title} <span className={`${color}`}>{target}</span> . . .
      </span>
    </div>
  );
};

export default PageLoading;
