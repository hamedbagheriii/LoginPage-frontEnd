import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CarouselPrevious } from '@/components/ui/carousel';

interface CartProps {
  title: string;
  description : number | string | boolean;
  icon: string;
  className?: string;
}

const CardComponent = ({ title, description, icon, className}: CartProps) => {
  return (
    <>
      <Card className={`bg-white shadow-lg Card_section shadow-blue-500/50 border-0
        w-full sm:w-5/12 lg:w-64 max-w-[400px] h-full ${className}`}>
        <CardHeader  className='flex justify-center sm:justify-between flex-col-reverse sm:flex-row
         pb-5 pt-2 sm:py-8 align-middle items-center gap-2 sm:gap-0'>
          <div className='space-y-3 w-full text-center sm:text-right'>
            <CardTitle className='text-blue-500 text-[17px]'>{title} :</CardTitle>
            {description && (
              <CardTitle className='text-blue-500'>{description}  عدد </CardTitle>
            )}
          </div>
          <i className={`${icon} text-[35px]  text-blue-500`}></i>
        </CardHeader>
      </Card>
    </>
  );
};

export default CardComponent;
