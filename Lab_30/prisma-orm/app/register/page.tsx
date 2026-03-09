"use client"
import { useState } from "react"

export default function Registrer(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    async function handleSubmit(e : any){
        e.preventDefault();

        await fetch('/api/register', {
            method : "POST",
            body : JSON.stringify({name , email , password})
        });

        alert("user created....!!")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
            <input placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Registrer</button>
        </form>
    )
}