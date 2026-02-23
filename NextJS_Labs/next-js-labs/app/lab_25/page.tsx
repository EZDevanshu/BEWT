import Link from 'next/link';
import React from 'react'

export async function getStudents(){
    const res = await fetch("https://6992a9578f29113acd3e53ed.mockapi.io/students" , {
        cache : 'no-store'
    });
    return res.json();
}

async function Lab25Page() {
    const studets = await getStudents();

    return (
        <div>
            <h1>Get all Students</h1>

            <ul>
                {studets.map((s : any)=>(
                    <li key={s.id}>
                        <Link href ={`/lab_25/students/${s.id}`}>{s.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lab25Page;