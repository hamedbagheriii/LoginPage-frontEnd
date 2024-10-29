import Lauout from '@/components/layout/panel/Lauout';
import { useIsUser } from '@/hooks/isUser';
import Cart from '@/utils/cart';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Panel() {
  const router = useRouter();
  const { userData, isLoading } = useIsUser();

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : userData ? (
        <Lauout>
          <div className='flex justify-center flex-col py-6'>
            <div
              className='w-full h-full flex gap-4 lg:gap-0 flex-col justify-center 
            items-center sm:flex-row sm:justify-around flex-wrap lg:flex-nowrap'
            >
              <Cart title='کل پست ها' description='20' icon='bi bi-mailbox2' />
              <Cart
                title='پست های دارای سرتیتر'
                description='description'
                icon='bi bi-file-earmark-text'
              />
              <Cart
                title='پست های دارای محتوا'
                description='description'
                icon='bi bi-file-earmark-text'
              />
              <Cart
                title='پست های کامل'
                description='description'
                icon='bi bi-file-earmark-text'
              />
            </div>
            <div className='w-10/12 mt-8 sm:mt-11 bg-slate-500 h-[200px] rounded-xl shadow-lg shadow-blue-500/50 mx-auto'>
              <Carousel className='w-full  h-[200px] bg-slate-200 rounded-xl'>
                <CarouselContent className='rounded-xl w-full h-[200px]'>
                  <CarouselItem className='w-full h-[200px] bg-blue-500  rounded-xl'>
                {/* ! اسم کارت ها اوکی شود و اینجا پیست شود */}
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </Lauout>
      ) : (
        router.push('/auth/login')
      )}
    </>
  );
}
