import { addPostService } from '@/services/posts/posts';
import { AlertComponent } from '@/utils/Alert';
import * as Yup from 'yup';


export const initialValues = {
    title : '',
    content : '',
}

export const onSubmit  = async (values : any, submitProps : any , router : any)=>{
    console.log(values);

    const handleCheck = (status : boolean , res : any)=>{
        if (status) {
            setTimeout(() => {
                AlertComponent('عملیات با موفقیت انجام شد !',
                `پست با موفقیت اضافه شد .`);
                router.push('/panel/posts')
            }, 1000);
        }
        else{
            AlertComponent('عملیات با خطا رو به رو شد !',
            res.data.message || 'مشکلی نامشخص رخ داده است .' ,
            'error');
            submitProps.setSubmitting(false);
        }
    }

    try {
        const res = await addPostService(values);
        
        if(res.status === 200 && res.data.success){
            handleCheck(true , res);
        }
        else{
            handleCheck(false , res);
        }
    } catch (error) {
        // error handler in service.ts
    }
}


export const validationSchema = Yup.object({
    title : Yup.string().required('عنوان الزامی میباشد .'),
    content : Yup.string(),
})