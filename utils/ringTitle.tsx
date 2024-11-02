import React from 'react';

interface RingTitleProps {
  title: string;
  className?: string;
}

const RingTitle = ({ title, className }: RingTitleProps) => {
  return (
    <span
      className={`text-[20px] mt-16 mb-4 text-center 
        ring-4 ring-white w-fit mx-auto px-4 py-1  
        rounded-full font-bold shadow-lg shadow-blue-500/50  text-blue-500 ${className}`}
    >
      {title}
    </span>
  );
};

export default RingTitle;
