import Link from 'next/link'
function Lab22Layout({children} :{children : React.ReactNode}) {
  return (
    <div>
        <Link href="/lab_22/darshan" className='ml-5'>Darshan</Link>
        <Link href="/lab_22/marwadi"className='ml-5'>Marwadi</Link>
        <Link href= "/lab_22/dashboard" className='ml-5'>Dashboard</Link>
        <Link href= "/lab_22/home" className='ml-5'>Home</Link>
        <Link href= "lab_22/product/1" className='ml-5'>Product</Link>
        <Link href="/lab_22/prime-range/1/10" className='ml-5'>Prime</Link>
        <Link href= "/lab_22/pagination/1"className='ml-5'>Pagination</Link>
        {children}
    </div>
  )
}

export default Lab22Layout