import { addPostService, updatePostService } from '@/services/posts/posts';
import { AlertComponent } from '@/utils/Alert';
import { NextRouter } from 'next/router';
import * as Yup from 'yup';

export const initialValues = {
  title: '',
  content: '',
};

type SubmitProps = (
  values: typeof initialValues,
  submitProps: any,
  router: NextRouter,
  post: string | undefined
) => void;
export const onSubmit: SubmitProps = async (values, submitProps, router, post) => {
  console.log(values);

  const handleCheck = (status: boolean, res: any , target : string) => {
    if (status) {
      setTimeout(() => {
        AlertComponent('عملیات با موفقیت انجام شد !', `پست با موفقیت ${target} شد .`);
        router.push('/panel/posts');
      }, 1000);
    } else {
      AlertComponent(
        'عملیات با خطا رو به رو شد !',
        res.data.message || 'مشکلی نامشخص رخ داده است .',
        'error'
      );
      submitProps.setSubmitting(false);
    }
  };

  try {
    let res;
    if (post !== 'add') {
        const resData = await updatePostService(values , post as string)
        res = {resData , target : 'ویرایش'}
    }else{
        const resData = await addPostService(values);
        res = {resData , target : 'اضافه'}
    }
    
    if (res.resData.status === 200 && res.resData.data.success) {
      handleCheck(true, res.resData , res.target);
    } else {
      handleCheck(false, res.resData , res.target);
    }
  } catch (error) {
    // error handler in service.ts
  }
};

export const validationSchema = Yup.object({
  title: Yup.string().required('عنوان الزامی میباشد .'),
  content: Yup.string(),
});
