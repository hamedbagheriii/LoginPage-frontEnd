import { registerUserSerivce } from '@/services/auth/auth';
import { AlertComponent } from '@/utils/Alert';
import * as Yup from 'yup';


export const initialValues = {
    email : '',
    fristName : '',
    lastName : '',
    password : '',
}

export const onSubmit  = async (values : any, submitProps : any , router : any)=>{
    console.log(values);

    try {
        const res = await registerUserSerivce(values);

        if(res.status === 200 && res.data.success){
            console.log(res);
            
            setTimeout(() => {
                AlertComponent('عملیات با موفقیت انجام شد !',
                `حساب کاربری شما با موفقیت ثبت شد .`);
                router.push('/auth/login')
            }, 2000);
        }
    } catch (error) {
        // error handler in service.ts
    }
    finally{
        setTimeout(() => {
            submitProps.resetForm();
            submitProps.setSubmitting(false);
        }, 3000);
    }

}


export const validationSchema = Yup.object({
    email : Yup.string().email('ایمیل معتبر نمیباشد . ')
    .required('ایمیل الزامی میباشد .'),
    fristName : Yup.string().required('نام الزامی میباشد . '),
    lastName : Yup.string().required('نام خانوادگی الزامی میباشد . '),
    password : Yup.string().min(6 , 'رمز عبور باید بیشتر از 6 کاراکتر باشد .')
    .required('رمز عبور الزامی میباشد .'),
})