import { AlertComponent } from "@/utils/Alert";
import axios from "axios"
import Cookies from "universal-cookie";


const errorHandler = (err : any)=>{
    AlertComponent('عملیات با خطا مواجه شد !',
    `${err}`,'error')
}
axios.interceptors.response.use((res)=>{
    if(res.status !== 200){
        console.log(res);
        errorHandler(res.data.message);
    }
    
    return res ;
},(err)=>{
    errorHandler(err.response.data.message || 
    'مشکلی سمت سرور رخ داده است .');
    console.log(err);
})

type ServiceType = (method : string , url : string , data ?: any)=>Promise<any>
export const service : ServiceType = async (method , url , data)=>{
    const cookies = new Cookies();
    const token = cookies.get('token');
    

    return await axios({
        baseURL : 'http://localhost:3100/userPanel',
        method : method,
        url : url,
        data : data,
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `${token || ''}`
        }
    })
}