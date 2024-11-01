import LiAction from '@/utils/liAction';
import React, { FC } from 'react';

interface PostActionProps {
  item: any;
  handleDeletePost: (id: string) => void;
}
const PostAction: FC<PostActionProps> = ({ item , handleDeletePost}) => {
  return (
    <div className='flex items-center justify-center  gap-4'>
      <LiAction icon='bi bi-trash3' color='text-red-600'
       onClick={() => handleDeletePost(item.id)} />
      <LiAction icon='bi bi-pencil-square' color='text-orange-500'
       onClick={() => {}} />
    </div>
  );
};

export default PostAction;
