import { NextRequest , NextResponse } from "next/server";
import { log } from "node:console";

export function proxy(request : NextRequest){
    const url = request.nextUrl;
    const {pathname} = request.nextUrl;
    const token = request.cookies.get("token")?.value;

     if(pathname.startsWith("/lab_24/products") && !token){
        return NextResponse.redirect(new URL("/lab_24/login" , request.url));
    }

    if(pathname.startsWith('/lab_24/login')){
            return NextResponse.next();     
    }

    const [value , expiry] = token.split("|");

    const isExpired = Date.now() > Number(expiry);

    if(isExpired){
        const newExpiry = Date.now() + 60 * 60 * 1000; // 1 hour
        const newToken = `${value}|${newExpiry}`;

        const response = NextResponse.next();

        response.cookies.set("token" , newToken , {
            path : "/",
        })

        console.log("token refreshed !!");
        
        return response;
    }
    // if pageNo exists 
    const hasPageNo = url.searchParams.has("pageNo");

    // if PageNo Not exits 
    if(!hasPageNo){
        url.searchParams.set("pageNo" , '0');

        // rewrite request with new query 
        return NextResponse.rewrite(url);
    }

    // if alredy exists 
    return NextResponse.next();
}

export const config = {
    matcher : ['/lab_24/products/:path*' , '/lab_24/login'],
}