import Link from 'next/link'
import React from 'react'

export default  function Lab23Page() {
  return (
    <div>
        <h1>Post</h1>

        <ul>
            {
                [1,2,4,5].map((id)=>(
                    <li key = {id}>
                        <Link href={`/post/${id}`}>Open Post {id}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
