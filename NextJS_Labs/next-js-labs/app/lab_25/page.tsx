import React from 'react'

type student = {
  id : string,
  name : string
}


async function getData(){
  const URL = "https://6992a9578f29113acd3e53ed.mockapi.io/students";

  const data = await fetch(URL , {
    cache : "no-store" ,
  });

  return data.json();
}

async function getAll(){
  const students = await getData();

  return(
    <>
      <ul>
        {students.map((s : any) => (
          <li key={s.id}>{s.id} - {s.name}</li>
        ))}
      </ul>
    </>
  )
}


function Lab25Page() { 
  return (
    <div>This is lab 25 page</div>
  )
}

export default getAll