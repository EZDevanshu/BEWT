import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

async function POST(request : Request){
    const body = await request.json();

    const user = await prisma.user.create({
        data : {
            userName : body.name ,
            email : body.email,
        }
    });

    return NextResponse.json()
}