import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

interface ModalProps {
  title: string;
  children: React.ReactNode;
}
const Modal = ({ title, children }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className='bg-blue-600 text-[14px] sm:ms-auto w-full
    text-white px-3 py-2 rounded-md sm:w-fit '>
        {title}
      </DialogTrigger>
      <DialogContent >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
