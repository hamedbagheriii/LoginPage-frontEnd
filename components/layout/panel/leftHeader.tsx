import React, { FC } from 'react';
import {
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

export interface LeftHeaderProps {
  hoverStyle: string;
  userData: any;
}
const LeftHeader: FC<LeftHeaderProps> = ({ hoverStyle, userData }) => {
  return (
    <>
      <MenubarMenu>

        <MenubarTrigger
          className='rounded-full px-3  bg-white/40 text-white
         transition-all duration-300 hover:bg-white hover:text-blue-600 '
        >
          <i className='bi bi-person-fill text-[22px]'></i>
        </MenubarTrigger>
        <MenubarContent
          className='text-center left-14 relative w-full 
          transition-all duration-500 
          bg-white shadow-lg top-[1px] border-2 text-blue-600'
        >
          <div className='flex cursor-default 
          flex-col text-[15px] py-2 items-center gap-2.5'>
            <span>{userData?.fullName}</span>
            <span className=''>کاربر : عادی</span>
          </div>
          <MenubarSeparator
            className='py-[1.5px] w-11/12 mx-auto 
            rounded-full bg-black/25 '
          />
          <MenubarItem className='hover:bg-white/100'>
            <Link href='/panel/profile' className={`text-center w-full ${hoverStyle}`}>
              مشاهده پروفایل
            </Link>
          </MenubarItem>
          <hr className='w-11/12 mx-auto' />
          <MenubarItem className='hover:bg-white/100'>
            <Link href='/logout' className={`text-center w-full  ${hoverStyle}`}>
              خروج
            </Link>
          </MenubarItem>
        </MenubarContent>

      </MenubarMenu>
    </>
  );
};

export default LeftHeader;
