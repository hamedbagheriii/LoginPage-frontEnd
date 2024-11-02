import React, { FC } from 'react';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
  bgColor?: string;
}

// ! this is for scrollbar styles
export const scrollBarStyle = `scrollbar scrollbar-track-slate-200 scrollbar-thumb-blue-500 
scrollbar-track-rounded-full scrollbar-thumb-rounded-full`;

const Layout: FC<LayoutProps> = ({ children, bgColor }) => {
  return (
    <div
      className={`w-full ${scrollBarStyle} ${bgColor} h-dvh overflow-x-hidden px-2`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
