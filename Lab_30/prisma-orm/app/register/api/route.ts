import prisma from "@/app/lib/prisma";
import { RedirectType } from "next/navigation";
import { NextResponse } from "next/server";

async function POST(request : Request){
    const body = await request.json();

    const user = await prisma.user.create({
        data : {
            userName : body.name ,
            email : body.email,
            password : body.password
        }
    });

    return NextResponse.json()
}