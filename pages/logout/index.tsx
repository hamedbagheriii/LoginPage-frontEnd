import { logoutUserService } from '@/services/auth/auth';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';

const Logout = () => {
    const router = useRouter();

  // ! handle logout
  const handleLogout = async () => {
    const cookies = new Cookies(null, { path: '/' });
    const res = await logoutUserService();

    cookies.remove('token');
    console.log(res);
    
    setTimeout(() => {
      router.push('/auth/login');
    }, 2000);
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <PageLoading title='خروج از' color='text-red-500' target='پنل' />
    </>
  );
};

export default Logout;
