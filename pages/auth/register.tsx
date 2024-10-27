import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, Formik, FormikProps } from 'formik';
import LinkBtn from '@/components/ui/Link';
import FormikControl from '@/components/formik/formikControl';
import { initialValues, onSubmit, validationSchema } from '@/services/cors/register/core';
import { useRouter } from 'next/router';
import { Span } from 'next/dist/trace';

const Register = () => {
  const router = useRouter();

  return (
    <div className='w-full min-h-dvh py-4 bg-slate-300 flex items-center justify-center'>
      <div className='w-full flex justify-center items-center'>
        <Card className='w-11/12 sm:w-8/12 pb-5 max-w-lg mx-auto flex flex-col '>
          <CardHeader className='text-center flex flex-col items-center -space-y-3'>
            <i className='bi bi-person-add text-[90px] w-fit  text-blue-600'></i>
            <CardTitle
              className='rounded-full ring ring-black/75  w-fit 
            px-7 py-2 align-middle text-blue-600 text-[17px]'
            >
              ساخت حساب کاربری
            </CardTitle>
          </CardHeader>
          <div className='w-11/12 h-1 bg-slate-400/25 mt-4 mb-7 mx-auto rounded-3xl' />
          <Formik
            initialValues={initialValues}
            onSubmit={(values , submitProps)=>onSubmit(values , submitProps , router)}
            validationSchema={validationSchema}
          >
            {(formik: FormikProps<any>) => {
              return (
                <Form className='space-y-4  flex flex-col '>
                  <FormikControl
                    control='input'
                    name='fristName'
                    type='text'
                    placeholder='نام خود را وارد کنید . . .'
                    label='نام'
                  />

                  <FormikControl
                    control='input'
                    name='lastName'
                    type='text'
                    placeholder='نام و نام خانوادگی خود را وارد کنید . . .'
                    label='نام خانوادگی'
                  />

                  <FormikControl
                    control='input'
                    name='email'
                    type='text'
                    placeholder='مثال : example@gmail.com'
                    label='ایمیل'
                  />

                  <FormikControl
                    control='input'
                    name='password'
                    type='text'
                    label='رمز عبور'
                    placeholder='رمز عبور خود را وارد کنید . . .'
                  />

                  <div className='pt-3 flex flex-col'>
                    <FormikControl control='submitBTN' title='ثبت نام' formik={formik} />
                    <button type='submit'>s</button>
                    <LinkBtn path='/auth/login' label='ورود به حساب کاربری'/>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default Register;
