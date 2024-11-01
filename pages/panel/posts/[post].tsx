import FormikControl from '@/components/formik/formikControl';
import Layout from '@/components/layout/panel/Layout';
import { Button } from '@/components/ui/button';
import {
  initialValues,
  onSubmit,
  validationSchema,
} from '@/services/cors/posts/add/core';
import RingTitle from '@/utils/ringTitle';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
  const router = useRouter();
  const {post} = router.query;

  return (
    <Layout bgColor='bg-blue-200'>
      <div className='w-full flex items-center justify-center px-6 mt-16'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, submitProps) => {
            onSubmit(values, submitProps, router);
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form className='w-full flex flex-col gap-5 pt-7 max-w-xl p-4 bg-white shadow-md rounded-lg'>
                <RingTitle className='mt-0 pt-1 px-5 shadow-none' title='افزودن مقاله' />
                <hr className='border-2 rounded-full border-blue-500/25' />

                <FormikControl
                  control='input'
                  name='title'
                  type='text'
                  placeholder='اخبار روز سینما'
                  label='سرتیتر'
                />

                <FormikControl
                  control='textarea'
                  name='content'
                  placeholder='امروزه در تمام دنیا . . .'
                  label='محتوا'
                />

                <hr className='border-2 rounded-full mt-4 border-blue-500/25' />
                <div className=' flex flex-row justify-evenly py-1'>
                  <Button
                    className='min-w-20 w-1/4
                  bg-red-500 hover:bg-red-600'
                  >
                    انصراف
                  </Button>
                  <FormikControl control='submitBTN' title='افزودن' formik={formik} className='w-1/4 m-0' />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default index;
