import { NextRequest, NextResponse } from "next/server";
import { getUserIsLoginSerivce } from "./services/auth/auth";

export const middleware = async (req : NextRequest)=>{
    const isLogin = await getUserIsLoginSerivce(req);
    const pathName = req.nextUrl.pathname
    

    if (!isLogin && pathName.startsWith('/')) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
    else if (isLogin && pathName.startsWith('/auth')) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    
}

export const config = {
    matcher: ['/:path*']
}