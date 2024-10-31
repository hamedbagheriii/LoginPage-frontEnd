import React, { useState } from 'react';
import { postType } from '@/utils/slider';
import { useIsUser } from '@/hooks/isUser';
import PaginationTable from '@/components/table/tabless';
import Layout from '@/components/layout/panel/Layout';
import PostAction from '@/components/actions/postAction';

const Index = () => {
  const { userData, isLoading } = useIsUser();
  const posts: postType[] = userData?.posts || [];

  const dataInfo = [
    { field: 'id', title: 'آیدی' },
    { field: 'title', title: 'تایتل' },
    { field: 'content', title: 'محتوا' },
    { 
        field: null, 
        title: 'عملیات', 
        element: (item: any) => <PostAction item={item} />
    },
  ];
  return (
    <Layout bgColor='blue-200'>
      <div className='w-full h-dvh mt-16'>
        <PaginationTable
          searchField='title'
          data={posts}
          dataInfo={dataInfo}
          numOfPage={5}
          isLoading={isLoading}
        />
      </div>
    </Layout>
  );
};

export default Index;
