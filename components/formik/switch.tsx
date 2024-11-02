import { FastField } from 'formik';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ErrorAlert from './errorAlert';
import { Switch } from '../ui/switch';

export interface SwitchProps {
  name: string;
  label: string;
  control: string;
  className?: string;
}
const FormikSwitch: FC<SwitchProps> = ({ name, className, label }) => {
  return (
    <FastField name={name}>
      {(formik: FieldProps<any>) => {
        return (
          <div
            className={`flex flex-row w-11/12 items-center mx-auto max-w-sm justify-around ${className}`}
          >
            <Label htmlFor={name} className='text-[17px]'>
              {label} :
            </Label>
            <Switch
              dir='ltr'
              id={name}
              checked={formik.field.value}
              onCheckedChange={(checked) => {
                formik.form.setFieldValue(name, checked);
              }}
            />
            <ErrorAlert name={name} />
          </div>
        );
      }}
    </FastField>
  );
};

export default FormikSwitch;
