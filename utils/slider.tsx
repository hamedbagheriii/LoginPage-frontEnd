import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import React, { FC } from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';

export interface postType {
  title: string;
  content: string;
  like: number;
}
interface SliderProps {
  posts: postType[];
}
const Slider: FC<SliderProps> = ({ posts }) => {
  return (
    <div
      className='w-10/12 mt-8 sm:mt-11 max-w-[400px] sm:max-w-[800px] h-[200px]
    rounded-xl shadow-2xl shadow-blue-500/80 mx-auto'
    >
      <Carousel
        className='w-full  h-[200px] bg-slate-200 rounded-xl'
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent dir='ltr' className='rounded-xl  w-full gap-3 h-[200px]'>
          {posts?.map((post: postType, i: number) => {
            return (
              post.title && (
                <CarouselItem
                  key={`${post.title}-${i}`}
                  className='w-full h-[200px] bg-blue-500 px-0  rounded-xl'
                >
                      <div className='space-y-3 h-full rounded-xl flex-col justify-center w-full text-center sm:text-right'>
                        <div className='flex justify-between w-full h-fit mt-4 px-4'>
                            <CardTitle className='text-white text-[17px]'>
                                <i className='bi bi-heart-fill mx-1'></i>
                                <small>{post.like}</small>
                            </CardTitle>
                            <CardTitle className='text-white text-[17px]'>
                                {post.title}
                                <i className='bi bi-file-earmark-text-fill mx-1'></i>
                            </CardTitle>
                        </div>
                        <CardTitle className='text-white absolute bottom-20 w-full text-center '>{post.content || ''}</CardTitle>
                      </div>
                </CarouselItem>
              )
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
