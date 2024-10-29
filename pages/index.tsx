import { getUserDataService } from '@/services/auth/auth';
import { AlertComponent } from '@/utils/Alert';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
  interface userDataType {
    fristName?: string;
    lastName?: string;
    email: string;
    password: null;
    id: number;
  }
  const [userData, setUserData] = useState<userDataType | null>(null);

  const handleGetData = async () => {
    try {
      const res: AxiosResponse = await getUserDataService();
      if (res.status == 200 && res.data.success) {
        setUserData(res.data.data);
      }
    } catch (error) {
      // error handler in
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      
    </div>
  );
}
