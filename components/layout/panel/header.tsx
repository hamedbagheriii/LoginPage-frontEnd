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

const Header = () => {
  const { userData, isLoading } = useSelector((state: any) => state.user);

  // ! hover style for menu items
  const hoverStyle = `transition-all duration-200 
  hover:bg-blue-500 py-1 rounded-full hover:text-white`;

  return (
    <>
      <Menubar
        dir='rtl'
        className='w-10/12 max-w-[600px] mx-auto mt-3 py-5 rounded-3xl px-2
      bg-blue-500 flex justify-between'
      >
        {/* right section */}
        <MenubarMenu>
          <MenubarTrigger
            className='bg-white/40 rounded-full text-[15px]
        text-white transition-all duration-300
        hover:bg-white hover:text-blue-600 px-10 '
          >
            <i className='bi bi-caret-down-fill left-[8px] top-[4px] relative '></i>
            پنل
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href='/panel/post'>مشاهده پست ها</Link>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>

        {/* left section */}
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
            <div className='flex flex-col text-[15px] py-2 items-center gap-2.5'>
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
      </Menubar>
    </>
  );
};

export default Header;
