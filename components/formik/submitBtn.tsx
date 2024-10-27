import React, { FC } from 'react';
import { Button } from '../ui/button';

export interface SubmitBtnProps {
    title : string;
    control : string;
    className? : string;
}
const SubmitBtn : FC<SubmitBtnProps> = ({title , className}) => {
    return (
        <Button type='submit' className={`w-4/12 mx-auto  ${className}`}>
            {title}
        </Button>
    );
}

export default SubmitBtn;
