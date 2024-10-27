import * as Yup from 'yup';


export const initialValues = {
    username : '',
    email : '',
    firstName : '',
    lastName : '',
    password : '',
}

type OnSubmit = (values : typeof initialValues , submitProps : any)=>void;
export const onSubmit : OnSubmit = (values , submitProps )=>{
    console.log(values);
}


export const validationSchema = Yup.object({
    username : Yup.string().required('نام کاربری الزامی میباشد . '),
    email : Yup.string().email('ایمیل معتبر نمیباشد . ').required('ایمیل الزامی میباشد .'),
    firstName : Yup.string().required('نام الزامی میباشد . '),
    lastName : Yup.string().required('نام خانوادگی الزامی میباشد . '),
    password : Yup.string().required('رمز عبور الزامی میباشد .'),
})