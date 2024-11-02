import FormikControl from '@/components/formik/formikControl';
import Layout from '@/components/layout/panel/Layout';
import { Button } from '@/components/ui/button';
import {
  initialValues,
  onSubmit,
  validationSchema,
} from '@/services/cors/posts/add-apdate/core';
import RingTitle from '@/utils/ringTitle';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const index = () => {
  const router = useRouter();
  const query = router.query;
  const { post } = query;
  const [rinitialValues, setRinitialValues] = useState<null | typeof initialValues>(null);

  // ! set rinitial values
  useEffect(() => {
    if (post?.[0] !== 'add') {
      setRinitialValues({
        title: (query?.title as string) || '',
        content: (query?.content as string) || '',
      });
    }
  }, [query]);

  // ! set title
  const title = post?.[0] === 'add' ? 'افزودن' : 'ویرایش' ;
  return (
    <Layout bgColor='bg-blue-200'>
      <div className='w-full flex items-center justify-center px-6 mt-16'>
        <Formik
          initialValues={rinitialValues || initialValues}
          onSubmit={(values, submitProps) => {
            onSubmit(values, submitProps, router , post?.[0]);
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(formik) => {
            return (
              <Form className='w-full flex flex-col gap-5 pt-7 max-w-xl p-4 bg-white shadow-md rounded-lg'>
                <RingTitle className='mt-2 pt-1 px-5 shadow-none' 
                title={`${title} پست`} />
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
                    type='button'
                    className='min-w-20 w-1/4
                  bg-red-500 hover:bg-red-600'
                    onClick={() => router.back()}
                  >
                    انصراف
                  </Button>
                  <FormikControl
                    control='submitBTN'
                    title={title}
                    formik={formik}
                    className='w-1/4 m-0'
                  />
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
