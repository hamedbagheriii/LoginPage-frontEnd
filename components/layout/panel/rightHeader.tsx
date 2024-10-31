import React, { FC } from 'react';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';
import { LeftHeaderProps } from './leftHeader';

const RightHeader: FC<LeftHeaderProps> = ({ hoverStyle, userData }) => {
  return (
    <>
      <MenubarMenu>
        <MenubarTrigger
          className='bg-white/40 rounded-full text-[15px]
        text-white transition-all duration-300
        hover:bg-white hover:text-blue-600 px-10 cursor-pointer'
        >
          <i className='bi bi-caret-down-fill left-[8px] top-[4px] relative '></i>
          پنل
        </MenubarTrigger>
        <MenubarContent
          className='text-center  relative w-full 
          transition-all duration-500 
         bg-white shadow-lg top-[1px] border-2 text-blue-600'
        >
          <MenubarItem className='hover:bg-white/100'>
            <Link href='/panel' className={`text-center w-full ${hoverStyle}`}>
              داشبورد
            </Link>
          </MenubarItem>
          <hr className='w-11/12 mx-auto' />
          <MenubarItem className='hover:bg-white/100'>
            <Link href='/panel/posts' className={`text-center w-full ${hoverStyle}`}>
              پست ها
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </>
  );
};

export default RightHeader;
