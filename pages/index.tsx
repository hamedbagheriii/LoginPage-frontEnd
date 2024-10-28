import { getUserDataSerivce } from "@/services/auth/register";
import { useEffect } from "react";

export default function Home() {

  const handleUserData = async ()=>{
    const res = await getUserDataSerivce()
    console.log(res);
  }


  useEffect(() => {
    handleUserData()
  }, []);
  return (
    <div className="w-full h-full overflow-x-hidden">
      s
    </div>
  );
}
