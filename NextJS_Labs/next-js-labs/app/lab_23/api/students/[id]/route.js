import { removeRequestMeta } from "next/dist/server/request-meta";
import { NextResponse } from "next/server";
// static data
const students = [
    {id : 1 , name : "Rahul" , course : "BCA"},
    {id : 2 , name : "Ajay" , course : "MCA"},
];


export async function GET(req , {params}){
    const id = parseInt(params.id);

    const student = students.find(s => s.id === id);

    if(!student){
        return NextResponse.json({message : "student not found"} ,  {status : 404});
    }

    return NextResponse.joson(student)
}

export async function PUT(req , {params}){
    const id = parseInt(params.id);
    const body = await req.json();

    const index =  students.find(s => s.id === id);

    if(index === -1){
        return NextResponse.json({message : "student not found"} , {status : 404});
    }

    students[index] = { ...students[index] , ...body};

    return NextResponse.json({
        message : "student Updated",
        data : students[index]
    })
}


export async function Delete(req , {params}){
    const id = parseInt(params.id);

    students = students.filter(s => s.id !== id);

    return NextResponse.json({
        message : "student deleted"
    })
}