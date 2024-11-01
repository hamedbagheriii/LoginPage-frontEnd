import React, { FC } from 'react';
import swal from 'sweetalert';

type AlertComponentTpye = (title: string, description?: string, color?: string) => void;
export const AlertComponent: AlertComponentTpye = (
  title = 'عملیات',
  description = '',
  color = 'success'
) => {
  return swal(title, description, color, {
    buttons: [false, 'باشه'],
  });
};

type ConfirmAlertType = (title: string) => Promise<boolean>;
export const ConfirmAlert : ConfirmAlertType =  async (title) => {
  return swal({
    title: title,
    icon: 'warning',
    buttons: ['لغو', 'تایید'],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      return true;
    } else {
      swal('عملیات لغو شد .', {
        icon: 'info',
      });
      return false;
    }
  });
};
