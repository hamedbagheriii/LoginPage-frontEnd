import React, { Attributes, FC } from 'react';
import FormikInput, { InputProps } from './input';
import SubmitBtn, { SubmitBtnProps } from './submitBtn';
import FormikTextArea, { TextareaProps } from './textarea';
import FormikSwitch from './switch';
import { SwitchProps } from './switch';

const FormikControl: FC<InputProps | SubmitBtnProps | TextareaProps | SwitchProps> = (
  props
) => {
  switch (props.control) {
    case 'input':
      return <FormikInput {...(props as InputProps)} />;
      break;

    case 'textarea':
      return <FormikTextArea {...(props as TextareaProps)} />;
      break;

    case 'switch':
      return <FormikSwitch {...(props as SwitchProps)} />;
      break;

    case 'submitBTN':
      return <SubmitBtn {...(props as SubmitBtnProps)} />;
      break;
  }
};

export default FormikControl;
