import { service } from '../service';

export const getAllPostsService = async () => {
  return await service('get', '/posts/allPosts');
};

export const addPostService = async (data : any) => {
  return await service('post', '/posts/add', data);
};

export const updatePostService = async (data : any , id : string) => {
  return await service('put', `/posts/update/${id}`, data);
}

export const deletePostService = async (id : string) => {
  return await service('delete', `/posts/remove/${id}`);
};

  