import React, { FC } from 'react';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

export interface SubmitBtnProps {
  title: string;
  control: string;
  className?: string;
  formik: any;
}
const SubmitBtn: FC<SubmitBtnProps> = ({ title, className, formik }) => {
  return (
    <Button type='submit' className={`w-4/12 mx-auto  ${className}`}>
      {formik.isSubmitting ? (
        <Loader2 className='animate-spin' style={{ width: '20px', height: '20px'}} />
      ) : (
        title
      )}
    </Button>
  );
};

export default SubmitBtn;
