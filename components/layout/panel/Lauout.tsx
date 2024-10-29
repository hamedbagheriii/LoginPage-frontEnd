import React, { FC } from 'react';
import Header from './header';

const Lauout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='w-full bg h-dvh overflow-x-hidden px-2'>
            <Header />
            {children}
        </div>
    );
}

export default Lauout;
