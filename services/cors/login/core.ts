import { loginUserSerivce } from '@/services/auth/auth';
import { AlertComponent } from '@/utils/Alert';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';


export const initialValues = {
    email : '',
    password : '',
}

export const onSubmit  = async (values : any, submitProps : any , router : any)=>{
    const cookies = new Cookies(null, { path: '/' });
    console.log(values);

    try {
        const res = await loginUserSerivce(values);
        console.log(res);
        
        if(res.status === 200 && res.data.success){
            cookies.set('token' , res.data.token)

            setTimeout(() => {
                AlertComponent('عملیات با موفقیت انجام شد !',
                `شما با موفقیت وارد حساب کاربری خود شدید .`);
                router.push('/panel')
            }, 2000);
        }
        else{
            cookies.remove('token');
        }
    } catch (error) {
        // error handler in service.ts
        cookies.remove('token')
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
    password : Yup.string().min(6 , 'رمز عبور باید بیشتر از 6 کاراکتر باشد .')
    .required('رمز عبور الزامی میباشد .'),
})