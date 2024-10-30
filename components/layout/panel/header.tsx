import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import LeftHeader from './leftHeader';
import RightHeader from './rightHeader';

const Header = () => {
  const { userData } = useSelector((state: any) => state.user);

  // ! hover style for menu items
  const hoverStyle = `transition-all duration-200 
  hover:bg-blue-500 py-1 rounded-full hover:text-white`;

  return (
    <>
      <Menubar
        dir='rtl'
        className='w-10/12 max-w-[700px] mx-auto mt-3 py-5 rounded-3xl px-2
      bg-blue-500 flex justify-between shadow-lg shadow-blue-500/50 border-0'
      >
        {/* right section */}
        <RightHeader hoverStyle={hoverStyle} userData={userData} />

        {/* left section */}
        <LeftHeader hoverStyle={hoverStyle}
        userData={userData} />

      </Menubar>
    </>
  );
};

export default Header;
