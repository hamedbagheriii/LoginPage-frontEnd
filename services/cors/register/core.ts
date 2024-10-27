import axios from 'axios';
import * as Yup from 'yup';


export const initialValues = {
    email : '',
    fristName : '',
    lastName : '',
    password : '',
}

type OnSubmit = (values : typeof initialValues , submitProps : any , router : any)=>void;
export const onSubmit : OnSubmit = async (values , submitProps , router )=>{
    console.log(values);

    // try {
    //     const res = await axios.post(`http://localhost:3100/userPanel/auth/sign-up`, values ,{
    //         headers : {
    //             'Content-Type' : 'application/json',
    //         }
    //     });
    //     if(res.status === 200){
    //         console.log(res);
    //         setTimeout(() => {
    //             submitProps.resetForm();
    //             submitProps.setSubmitting(false);
    //             router.push('/auth/login')
    //         }, 7000);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    setTimeout(() => {
        console.log('done');
        
        submitProps.setSubmitting(false);
    }, 7000);
}


export const validationSchema = Yup.object({
    email : Yup.string().email('ایمیل معتبر نمیباشد . ').required('ایمیل الزامی میباشد .'),
    fristName : Yup.string().required('نام الزامی میباشد . '),
    lastName : Yup.string().required('نام خانوادگی الزامی میباشد . '),
    password : Yup.string().min(6 , 'رمز عبور باید بیشتر از 6 کاراکتر باشد .').required('رمز عبور الزامی میباشد .'),
})