import React, { useState } from 'react';
import { postType } from '@/utils/slider';
import { useIsUser } from '@/hooks/isUser';
import PaginationTable from '@/components/table/table';
import Layout from '@/components/layout/panel/Layout';
import PostAction from '@/components/actions/postAction';
import { AlertComponent, ConfirmAlert } from '@/utils/Alert';
import { deletePostService } from '@/services/posts/posts';
import { useRouter } from 'next/router';
import Modal from '@/utils/modal';
import { DialogDescription } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogClose, DialogContent } from '@radix-ui/react-dialog';

const Index = () => {
  const { userData, isLoading, handleGetData } = useIsUser();
  const posts: postType[] = userData?.posts || [];

  // ! handle delete post
  const handleDeletePost = async (id: string) => {
    if (await ConfirmAlert(`آیا از حذف پست ${id} مطمئن هستید؟`)) {
      const res = await deletePostService(id);
      if (res.status === 200) {
        AlertComponent(
          'عملیات با موفقیت انجام شد .',
          `پست با آیدی ${id} با موفقیت حذف شد .`,
          'success'
        );

        handleGetData();
      }
    }
  };


  const dataInfo = [
    { field: 'id', title: 'آیدی' },
    { field: 'title', title: 'تایتل' },
    { field: 'content', title: 'محتوا' },
    {
      field: null,
      title: 'عملیات',
      element: (item: any) => (
        <PostAction item={item} handleDeletePost={handleDeletePost} />
      ),
    },
  ];


  return (
    <Layout bgColor='bg-blue-200'>
      <div className='w-full h-dvh mt-16'>
        <PaginationTable
          searchField='title'
          data={posts}
          dataInfo={dataInfo}
          numOfPage={5}
          isLoading={isLoading}
          addItem='posts/add'
        />
      </div>
    </Layout>
  );
};

export default Index;
