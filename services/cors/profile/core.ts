import { uPasswordService, updateUserService } from '@/services/profile/profile';
import { AlertComponent } from '@/utils/Alert';
import { NextRouter } from 'next/router';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

export const initialValues = {
  fristName: '',
  lastName: '',
  email: '',
  changePassword: false,
  o_password: '',
  u_password: '',
};

type SubmitProps = (
  values: typeof initialValues,
  submitProps: any,
  router: NextRouter
) => void;
export const onSubmit: SubmitProps = async (values, submitProps, router) => {
  const cookie = new Cookies();
  console.log(values);

  const handleCheck = (status: boolean, res: any, target: string) => {
    if (status) {
      setTimeout(() => {
        AlertComponent('عملیات با موفقیت انجام شد !', `کاربر با موفقیت ${target} شد .`);
        if (values.changePassword) {
          cookie.remove('token');
          router.push('/auth/login');
        } else {
          router.push('/panel');
        }
      }, 1000);
    } else {
      AlertComponent(
        'عملیات با خطا رو به رو شد !',
        res.message || 'مشکلی نامشخص رخ داده است .',
        'error'
      );
      submitProps.setSubmitting(false);
    }
  };

  try {
    let res;
    if (values.changePassword) {
      res = await uPasswordService({
        o_password: values.o_password,
        u_password: values.u_password,
      });
    } else {
      res = await updateUserService({
        fristName: values.fristName,
        lastName: values.lastName,
        email: values.email,
      });
    }

    if (res.status === 200 && res.data.success) {
      handleCheck(true, res.data, 'ویرایش');
    } else {
      handleCheck(false, res.data, 'ویرایش');
    }
  } catch (error) {
    // error handler in service.ts
  } finally {
    submitProps.setSubmitting(false);
  }
};

export const validationSchema = Yup.object({
  fristName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email('ایمیل معتبر نمیباشد .'),
  o_password: Yup.string().when('changePassword', {
    is: true,
    then: () =>
      Yup.string()
        .required('رمز عبور فعلی الزامی میباشد .')
        .min(6, 'حداقل 6 کاراکتر مورد نیاز است .'),
  }),
  u_password: Yup.string().when('changePassword', {
    is: true,
    then: () =>
      Yup.string()
        .required('رمز عبور جدید الزامی میباشد .')
        .min(6, 'حداقل 6 کاراکتر مورد نیاز است .'),
  }),
  changePassword: Yup.boolean(),
});
