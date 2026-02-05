import Link from 'next/link'
import React, { Children } from 'react'

function Lab22Layout({children} :{children : React.ReactNode}) {
  return (
    <div>
        <Link href="/lab_22/darshan" className='mr-5'>Darshan</Link>
        <Link href="/lab_22/marwadi"className='ml-5'>Marwadi</Link>

        {children}
    </div>
  )
}

export default Lab22Layout