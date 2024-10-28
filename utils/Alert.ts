import React, { FC } from 'react';
import swal from 'sweetalert';


type AlertComponentTpye  = (title : string , description ?: string , color ?: string) => void
export const AlertComponent : AlertComponentTpye = (title = 'عملیات' , description = '' ,
 color = 'success') => {
  return swal ( title ,  description ,  color , {
    buttons : [false,'باشه']
  })
};


