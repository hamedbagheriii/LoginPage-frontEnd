import React, { FC } from 'react';
import Link from 'next/link';

interface LinkBtnProps {
  path: string;
  label: string;
}
const LinkBtn: FC<LinkBtnProps> = ({ path, label }) => {
  return (
    <Link
      className='mx-auto text-sm mt-5 hover:text-blue-600 
        transition-all ease-in-out duration-200 '
      href={path}
    >
      {label} . . .
    </Link>
  );
};

export default LinkBtn;
