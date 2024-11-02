import { service } from '../service';

export const updateUserService = async (data: any) => {
  return await service('put', `/auth/update`, data);
};

export const uPasswordService = async (data: any) => {
  return await service('put', `/auth/update/password`, data);
};

