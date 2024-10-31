import React, { FC } from 'react';

interface PostActionProps {
    item: any;
}
const PostAction : FC<PostActionProps> = ({item}) => {
    return (
        <div className='flex items-center justify-center  gap-4'>
            <span className='cursor-pointer text-red-600'>
                <i className='bi bi-trash3'></i>
            </span>
            <span className='cursor-pointer text-orange-500'>
                <i className='bi bi-pencil-square'></i>
            </span>
        </div>
    );
}

export default PostAction;
