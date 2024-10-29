import Header from '@/components/layout/panel/header';
import { useIsUser } from '@/hooks/isUser';
import PageLoading from '@/utils/pageLoading';
import { useRouter } from 'next/router';
import React from 'react';

export default function Panel() {
  const router = useRouter();
  const { userData, isLoading } = useIsUser();

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : userData ? (
        <div className='w-full bg h-dvh overflow-x-hidden px-2'>
          <Header />
        </div>
      ) : (
        router.push('/auth/login')
      )}
    </>
  );
}
