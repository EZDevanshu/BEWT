import { useSelectedLayoutSegments } from "next/navigation";
import { NextResponse } from "next/server";

let students = [
    {id : 1 , name : "bhaviik" , course : "Btech"},
    {id : 2 , name : "Devanshu" , course : "Btech"},
    {id : 3 , name : "aryan" , course : "Btech"},
];

// get all students 

export async function GET(){
    return NextResponse.json({
        success : ture ,
        data : students
    })
}

export async function POST(req){
    const body = await req.json();

    const newStudent = {id : students.length + 1 , name : body.name , course : body.course};

    students.push(newStudent);

    return NextResponse.json({
        success : true ,
        message : "student added successful",
        data : newStudent
    });
}

