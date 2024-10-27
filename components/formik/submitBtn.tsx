import React, { FC } from 'react';
import { Button } from '../ui/button';

export interface SubmitBtnProps {
    title : string;
    control : string;
    className? : string;
    formik : any;
}
const SubmitBtn : FC<SubmitBtnProps> = ({title , className , formik}) => {
    return (
        <Button type='submit' className={`w-4/12 mx-auto  ${className}`}>
            {formik.isSubmitting ? <span>sdasasds</span> : title}      
        </Button>
    );
}

export default SubmitBtn;
