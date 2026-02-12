import Link from 'next/link'
import React from 'react'

function LayoutLab_23({children , model} : {children : React.ReactNode , model : React.ReactNode}) {
  return (
    <div>
        <Link href = "/lab_23/home" className='ml-5'>Home</Link>
        <Link href = "/lab_23/college"className='ml-5'>College</Link>
        <Link href = "/lab_23/login"className='ml-5'>Login</Link>
        {children}
        {model}
        </div>
  )
}

export default LayoutLab_23