import React, { FC } from 'react';
import Header from './header';

interface LayoutProps {
    children: React.ReactNode;
    bgColor?: string;
}
const Layout: FC<LayoutProps> = ({ children, bgColor }) => {
    return (
        <div className={`w-full bg-${bgColor} h-dvh overflow-x-hidden px-2`}>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
