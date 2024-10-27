import React, { Attributes, FC } from 'react';
import FormikInput, { InputProps } from './input';
import SubmitBtn, { SubmitBtnProps } from './submitBtn';


const FormikControl : FC<InputProps | SubmitBtnProps> = (props) => {
    switch (props.control) {
        case 'input':
            return <FormikInput {...props as InputProps} />
        break;
    
        case 'submitBTN':
            return <SubmitBtn {...props as SubmitBtnProps} />
        break;
    }
}

export default FormikControl;
