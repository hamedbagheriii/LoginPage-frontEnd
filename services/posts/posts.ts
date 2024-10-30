import { service } from '../service';

export const getAllPostsService = async () => {
  return await service('get', '/posts/allPosts');
};

  