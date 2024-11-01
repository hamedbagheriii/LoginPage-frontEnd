import React, { Attributes, FC } from 'react';
import FormikInput, { InputProps } from './input';
import SubmitBtn, { SubmitBtnProps } from './submitBtn';
import FormikTextArea, { TextareaProps } from './textarea';


const FormikControl : FC<InputProps | SubmitBtnProps | TextareaProps> = (props) => {
    switch (props.control) {
        case 'input':
            return <FormikInput {...props as InputProps} />
        break;
    
        case 'textarea':
            return <FormikTextArea {...props as TextareaProps} />
        break;
    
        case 'submitBTN':
            return <SubmitBtn {...props as SubmitBtnProps} />
        break;
    }
}

export default FormikControl;
