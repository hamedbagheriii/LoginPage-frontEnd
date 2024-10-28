import { loginUserSerivce } from '@/services/auth/register';
import { AlertComponent } from '@/utils/Alert';
import * as Yup from 'yup';


export const initialValues = {
    email : '',
    password : '',
}

export const onSubmit  = async (values : any, submitProps : any , router : any)=>{
    console.log(values);

    try {
        const res = await loginUserSerivce(values);

        if(res.status === 200 && res.data.success){
            console.log(res);
            localStorage.setItem('token' , res.data.token)

            setTimeout(() => {
                AlertComponent('عملیات با موفقیت انجام شد !',
                `شما با موفقیت وارد حساب کاربری خود شدید .`);
                router.push('/')
            }, 2000);
        }
        else{
            localStorage.removeItem('token')
        }
    } catch (error) {
        // error handler in service.ts
        localStorage.removeItem('token')
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