import React from 'react'
async function getUsers() {
    const res = await fetch('http://localhost:3000/test_mysql_db/mysql/api' , {
        cache : 'no-store' 
    })
    return res.json();
}


async function MySqlPage() {
    const users = await getUsers();

  return (
    <div>
        <h1>MySQL</h1>

        <ul>
            {users.map((u:any)=>(
                <li key={u.id}>{u.id} - {u.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default MySqlPage