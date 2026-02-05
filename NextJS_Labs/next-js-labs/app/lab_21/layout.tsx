import Link from 'next/link'
import React from 'react'

export default function Lab21LayOut({children} : {children : React.ReactNode}) {
  return (
    <div>
        <Link href= "/lab_21/template1" className='pl-5'>tamplate1</Link>
        <Link href= "/lab_21/template2" className='pl-5'>tamplate2</Link>
        <Link href= "/lab_21/template3" className='pl-5'>tamplate3</Link>
        {children}
    </div>
  )
}
