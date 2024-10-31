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
  userID?: number;
  userData ?: {
    fristName: string;
    lastName: string;
    email: string;
  };

}
interface SliderProps {
  posts: postType[];
}
const Slider: FC<SliderProps> = ({ posts }) => {
  return (
    <>
      <span className='text-[20px] my-3 text-center ring-2 ring-blue-500 w-fit mx-auto px-4 py-1  
      rounded-full font-bold shadow-lg shadow-blue-500/50 text-blue-500'>
        پست های من 
      </span>
      <div
        className='w-10/12 mt-5 max-w-[400px] sm:max-w-[800px] xl:max-w-[1000px] h-[220px] lg:h-[255px] 
      shadow-2xl shadow-blue-600/75 mx-auto rounded-xl border-2  border-blue-600'
      >
        <Carousel
          className='w-full  h-[215px] lg:h-[230px]  bg-transparent rounded-xl'
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnFocusIn: false,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent
            dir='ltr'
            className='rounded-xl flex relative flex-nowrap pe-4 ps-2
        py-2 gap-2 w-full h-[215px] lg:h-[245px] '
          >
            {posts?.map((post: postType, i: number) => {
              return (
                post.title && (
                  <CarouselItem
                    key={`${post.title}-${i}`}
                    className='w-full h-[200px] bg-blue-500 shadow-md shadow-blue-500/80 
                  mx-auto lg:h-[230px]  rounded-xl'
                  >
                    <div
                      className='space-y-3 h-full rounded-xl mx-auto 
                      flex-col justify-center w-full text-center px-4 sm:text-right'
                    >
                      <div className='flex justify-between w-full h-fit pt-6'>
                        <CardTitle className='text-white text-[17px]'>
                          <i className='bi bi-heart-fill mx-1'></i>
                          <small>{post.like}</small>
                        </CardTitle>
                        <CardTitle className='text-white text-[17px]'>
                          {post.title}
                          <i className='bi bi-file-earmark-text-fill mx-1'></i>
                        </CardTitle>
                      </div>
                      <CardTitle
                        className='text-white w-full text-[15px] sm:text-[17px]
                         text-center text-wrap leading-7'
                      >
                        {post.content.slice(0, 200) || ' . . . '}
                      </CardTitle>
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
    </>
  );
};

export default Slider;
