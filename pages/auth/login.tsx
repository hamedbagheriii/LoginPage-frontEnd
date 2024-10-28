import FormikControl from '@/components/formik/formikControl';
import AuthHeader from '@/components/layout/authHeader';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import LinkBtn from '@/components/ui/Link';
import { initialValues, onSubmit, validationSchema } from '@/services/cors/login/core';
import { Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  const router = useRouter();

  return (
    <>
      <AuthHeader title='ورود به حساب کاربری' icon='bi bi-person-check'>
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
                  <FormikControl control='submitBTN' title='ورود' formik={formik} />
                  <LinkBtn path='/auth/register' label='حساب کاربری ندارید ؟ ثبت نام' />
                </div>
              </Form>
            );
          }}
        </Formik>
      </AuthHeader>
    </>
  );
};

export default Login;
