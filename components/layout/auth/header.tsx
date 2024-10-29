import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { FC } from 'react';


interface AuthHeaderProps {
    children : React.ReactNode ;
    title : string ;
    icon : string ;
}
const AuthHeader : FC<AuthHeaderProps> = ({children , title , icon = 'bi bi-person-add'}) => {
    return (
        <div className='w-full min-h-dvh py-4 bg-slate-300 flex items-center justify-center'>
            <div className='w-full flex justify-center items-center'>
              <Card className='w-11/12 sm:w-8/12 pb-5 max-w-lg mx-auto flex flex-col '>
                <CardHeader className='text-center flex flex-col items-center -space-y-3'>
                  <i className={`${icon} text-[90px] w-fit  text-blue-600`}></i>
                  <CardTitle
                    className='rounded-full ring ring-black/75  w-fit 
                    px-7 py-2 align-middle text-blue-600 text-[17px]'
                  >
                    {title}
                  </CardTitle>
                </CardHeader>
                <div className='w-11/12 h-1 bg-slate-400/25 mt-4 mb-7 mx-auto rounded-3xl' />
                {children}
              </Card>
            </div>
        </div>
    );
}

export default AuthHeader;
