import { NextRequest } from 'next/server';
import { service } from '../service';

// ! register user service
export const registerUserSerivce = async (data: any) => {
  return await service('post', '/auth/sign-up', data);
};

// ! login user service
export const loginUserSerivce = async (data: any) => {
  return await service('post', '/auth/sign-in', data);
};

// ! get user data service
export const getUserDataService = async () => {
  return await service('get', '/auth/user');
};

// ! get user is login service
export const getUserIsLoginSerivce = async (req: NextRequest) => {
  const cookies = req.cookies;
  const token = cookies.get('token')?.value;

  const res: any = await fetch('http://localhost:3100/userPanel/auth/user', {
    headers: {
      Authorization: `${token || ''}`,
    },
  });

  if (res.status === 200) {
    return true;
  } else {
    cookies.delete('token');
    return false;
  }
};

// ! logout user service
export const logoutUserService = async () => {
  return await service('get', '/auth/logout');
};
