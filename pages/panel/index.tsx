import Lauout from '@/components/layout/panel/Lauout';
import { useIsUser } from '@/hooks/isUser';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React from 'react';
import CardComponent from '@/utils/card';
import Slider, { postType } from '@/utils/slider';

export default function Panel() {
  const router = useRouter();
  const { userData, isLoading } = useIsUser();
  const posts: postType[] = userData?.posts || [];

  // ! handle get likes
  const getLikes = () => {
    let likes = 0;
    posts?.map((p: any) => (p.like ? (likes += p.like) : null));
    return likes;
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : userData ? (
        <Lauout>
          <div className='flex justify-center flex-col py-6'>
            <div
              className='w-full h-full flex gap-4 lg:gap-0 flex-col justify-center 
            items-center sm:flex-row sm:justify-around flex-wrap lg:flex-nowrap'
            >
              <CardComponent
                title='کل پست ها'
                description={posts?.length || 0}
                icon='bi bi-mailbox2'
              />
              <CardComponent
                title='کل لایک ها'
                description={getLikes()}
                icon='bi bi-heart-fill'
              />
              <CardComponent
                title='پست های دارای محتوا'
                description={posts?.filter((p: any) => p.content).length || 0}
                icon='bi bi-file-earmark-text'
              />
              <CardComponent
                title='پست های کامل'
                description={posts?.filter((p: any) => p.content && p.title).length || 0}
                icon='bi bi-file-post'
              />
            </div>
            <Slider posts={posts} />
          </div>
        </Lauout>
      ) : (
        router.push('/auth/login')
      )}
    </>
  );
}
