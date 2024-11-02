import { useIsUser } from '@/hooks/isUser';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import CardComponent from '@/utils/card';
import Slider, { postType } from '@/utils/slider';
import { getAllPostsService } from '@/services/posts/posts';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/panel/Layout';
import RingTitle from '@/utils/ringTitle';

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
      {isLoading  ? (
        <PageLoading />
      ) : userData ? (
        <Layout bgColor='bg-blue-200'>
          <div className='flex justify-center flex-col py-10 '>
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
                description={getLikes() || '0'}
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

            {posts.length > 0 && (
              <Slider posts={posts} />
            )}

            {showAllPosts?.length > 0 && (
              <>
                <RingTitle title='پست های دیگر کاربران'  
                className={`${posts.length > 0 ? '' : 'mt-0'} `}/>

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
                          description={post.userData?.fristName 
                          + ' ' + post.userData?.lastName}
                          icon='bi bi-chat-left-dots-fill'
                          className='lg:w-96 mt-4'
                        />
                      );
                    }
                  })}

                  {/* lyer */}
                  <div className={`w-full h-3/6 bg-gradient-to-b from-transparent
                to-blue-200 absolute bottom-0 left-0 ${showHight ? 'hidden' : 'block'}`}
                  ></div>

                  <Button className={`absolute bottom-10 px-6 py-2 text-[16px]  left-2/4
                  shadow-lg shadow-blue-500 
                  -translate-x-2/4 ${showHight ? 'shadow-black/75' : ''}`}  
                  onClick={() => setShowHight((prev) => !prev)}
                  >
                    {showHight ? 'بستن . . .' : 'بیشتر . . .'}
                  </Button>
                </div>
              </>
            )}
          </div>

        </Layout>
      ) : (
        router.push('/auth/login')
      )}
    </>
  );
}
