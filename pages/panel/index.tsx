import Lauout from '@/components/layout/panel/Lauout';
import { useIsUser } from '@/hooks/isUser';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import CardComponent from '@/utils/card';
import Slider, { postType } from '@/utils/slider';
import { getAllPostsService } from '@/services/posts/posts';
import { Button } from '@/components/ui/button';

export default function Panel() {
  const router = useRouter();
  const { userData, isLoading } = useIsUser();
  const posts: postType[] = userData?.posts || [];
  const [allPosts, setAllPosts] = useState<postType[]>([]);
  const [showAllPosts, setShowAllPosts] = useState<postType[]>([]);
  const [showHight, setShowHight] = useState<boolean>(false);

  // ! handle get all posts
  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPostsService();
      if (res.status === 200 && res.data.success) {
        setAllPosts(res.data.posts);
        console.log(res.data);

        setShowAllPosts(res.data.posts.slice(0, 6));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ! handle get likes
  const getLikes = () => {
    let likes = 0;
    posts?.map((p: any) => (p.like ? (likes += p.like) : null));
    return likes;
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  useEffect(() => {
    if (showHight) {
      setShowAllPosts(allPosts);
    } else {
      setShowAllPosts(allPosts.slice(0, 6));
    }
  }, [showHight]);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : userData ? (
        <Lauout>
          <div className='flex justify-center flex-col py-10  '>
            <div
              className='w-full h-full flex gap-4 lg:gap-0 flex-col justify-center 
            items-center sm:flex-row sm:justify-around flex-wrap lg:flex-nowrap mb-8'
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

            {showAllPosts?.length > 0 && (
              <>
                <span
                  className='text-[20px] mt-16 mb-4 text-center 
                  ring-2 ring-blue-500 w-fit mx-auto px-4 py-1  
                  rounded-full font-bold  text-blue-500'
                >
                  پست های دیگر کاربران
                </span>

                {/* ! show all posts */}
                <div
                  className='w-full h-full relative  pb-7 flex gap-4 lg:gap-3 flex-col justify-center 
                  items-center sm:flex-row sm:justify-around flex-wrap '
                >
                  {showAllPosts?.map((post: postType, i: number) => {
                    if (post.userID !== userData?.id) {
                      return (
                        <CardComponent
                          key={`${post.title}-${i}`}
                          title={post.title}
                          description={false}
                          icon='bi bi-chat-left-dots-fill'
                          className='lg:w-96 mt-4'
                        />
                      );
                    }
                  })}

                  <div
                    className={`w-full h-3/6 bg-gradient-to-b from-transparent
                to-white absolute bottom-0 left-0 ${showHight ? 'hidden' : 'block'}`}
                  ></div>

                  <Button
                    className='absolute bottom-10 px-6 py-2 text-[16px] left-2/4
                  shadow-lg shadow-blue-500 
                  -translate-x-2/4'
                    onClick={() => setShowHight((prev) => !prev)}
                  >
                    {showHight ? 'بستن . . .' : 'بیشتر . . .'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </Lauout>
      ) : (
        router.push('/auth/login')
      )}
    </>
  );
}
