import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import LinkBtn from '@/components/ui/Link';
import FormikControl from '@/components/formik/formikControl';
import { initialValues, onSubmit, validationSchema } from '@/services/cors/register/core';
import { useRouter } from 'next/router';
import AuthHeader from '@/components/layout/auth/header';

const Register = () => {
  const router = useRouter();

  return (
    <>
      <AuthHeader title='ساخت حساب کاربری' icon='bi bi-person-add'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, submitProps) => {
            onSubmit(values, submitProps, router);
          }}
          validationSchema={validationSchema}
        >
          {(formik: FormikProps<any>) => {
            return (
              <Form onSubmit={formik.handleSubmit} className='space-y-4  flex flex-col '>
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
                  <LinkBtn path='/auth/login' label='ورود به حساب کاربری' />
                </div>
              </Form>
            );
          }}
        </Formik>
      </AuthHeader>
    </>
  );
};

export default Register;
