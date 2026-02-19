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

async function GetByID({params} : Promise<{params : {id : string}}>){
    const {id} = 
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




export default GetByID