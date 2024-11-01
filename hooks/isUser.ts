import { getUserError, getUserLoading, getUserResponse } from '@/redux/user/userAction';
import { getUserDataService } from '@/services/auth/auth';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useIsUser = () => {
  interface userDataType {
    fristName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    password: null;
    id: number;
    posts : any[] | null;
  }
  const [userData, setUserData] = useState<userDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();


  const handleGetData = async () => {
    dispatch(getUserLoading());

    try {
      const res: AxiosResponse = await getUserDataService();
      console.log(res);

      if (res.status == 200 && res.data.success) {
        const initData = res.data.data;
        const resData = {
          ...initData,
          fullName: initData.fristName + ' ' + initData.lastName,
        }
        
        setUserData(resData);
        dispatch(getUserResponse(resData));
      }

    } catch (error : any) {
      // error handler in
      dispatch(getUserError(
        error.response?.data?.message ||
        'مشکلی سمت سرور رخ داده است .'
      ));
    }
    finally{
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };


  useEffect(() => {
    handleGetData();
  }, []);


  return { userData, isLoading , handleGetData};
};
