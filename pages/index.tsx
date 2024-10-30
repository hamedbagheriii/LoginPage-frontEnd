import { useIsUser } from '@/hooks/isUser';
import Link from 'next/link';
import React from 'react';

export default function Home() {

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Link href={'/panel'}>go to panel</Link>
    </div>
  );
}
