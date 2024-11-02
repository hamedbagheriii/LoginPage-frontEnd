import FormikControl from '@/components/formik/formikControl';
import Layout from '@/components/layout/panel/Layout';
import { useIsUser } from '@/hooks/isUser';
import { onSubmit } from '@/services/cors/profile/core';
import { initialValues } from '@/services/cors/profile/core';
import { validationSchema } from '@/services/cors/profile/core';
import RingTitle from '@/utils/ringTitle';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const index = () => {
  const router = useRouter();
  const [rinitialValues, setRinitialValues] = useState<null | typeof initialValues>(null);
  const { userData } = useIsUser();

  // ! set rinitial values
  useEffect(() => {
    setRinitialValues({
      fristName: userData?.fristName || '',
      lastName: userData?.lastName || '',
      email: userData?.email || '',
      changePassword: false,
      o_password : '',
      u_password : '',
    });
  }, [userData]);

  // ! set title
  return (
    <Layout bgColor='bg-blue-200'>
      <div className='w-full flex items-center justify-center px-6 mt-16'>
        <Formik
          initialValues={rinitialValues || initialValues}
          onSubmit={(values, submitProps) => {
            onSubmit(values, submitProps, router);
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          validateOnMount={true}
        >
          {(formik) => {
            return (
              <Form className='w-full flex flex-col gap-5 pt-7 max-w-xl p-4 bg-white shadow-md rounded-lg'>
                <i className='bi bi-person-circle text-[80px] text-blue-500 mx-auto'></i>
                <RingTitle className='mt-0 pt-1 px-5 shadow-none' title={`ویرایش حساب`} />
                <hr className='border-2 rounded-full border-blue-500/25' />

                <FormikControl
                  control='input'
                  name='fristName'
                  type='text'
                  placeholder='احمد'
                  label='نام'
                />

                <FormikControl
                  control='input'
                  name='lastName'
                  type='text'
                  placeholder='رضایی'
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
                  control='switch'
                  name='changePassword'
                  label='تغییر رمز عبور'
                  className='mt-2'
                />

                {formik.values.changePassword && (
                  <>
                    <FormikControl
                      control='input'
                      name='o_password'
                      type='text'
                      placeholder='مثال : ghasuf23'
                      label='رمز عبور فعلی'
                    />

                    <FormikControl
                      control='input'
                      name='u_password'
                      type='text'
                      placeholder='مثال : ghasem12'
                      label='رمز عبور جدید'
                    />
                  </>
                )}

                <hr className='border-2 rounded-full mt-4 border-blue-500/25' />
                <div className=' flex flex-row justify-evenly py-1'>
                  <FormikControl
                    control='submitBTN'
                    title={'ویرایش'}
                    formik={formik}
                    className='w-1/4 m-0'
                    disabled={!formik.dirty}
                    onClick={()=>{
                      if (formik.values.changePassword) {
                        formik.setTouched({...formik.touched, u_password: true , o_password: true});
                      }
                    }}
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
