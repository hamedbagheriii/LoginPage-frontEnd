import { FastField, FieldProps } from 'formik';
import React, { FC } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ErrorAlert from './errorAlert';
import { Textarea } from '../ui/textarea';


export interface TextareaProps {   
    name: string;
    label: string;
    placeholder ?: string;
    control : string;
}

const FormikTextArea : FC<TextareaProps> = ({name, label , placeholder}) => {
    return (
        <FastField name={name} >
          {(form: FieldProps<any>) => {
            return (
              <div className={`flex flex-col w-11/12 mx-auto max-w-sm justify-center gap-1 `}>
                <Label htmlFor={name} className='text-[17px]'>
                  {label} :
                </Label>
                <Textarea
                  id={name}
                  className='h-10 border-2 border-black placeholder:text-blue-600/75 text-blue-600'
                  {...form.field}
                  placeholder={ placeholder}
                />
                <ErrorAlert name={name} />
              </div>
            );
          }}
        </FastField>
      );
}

export default FormikTextArea;
