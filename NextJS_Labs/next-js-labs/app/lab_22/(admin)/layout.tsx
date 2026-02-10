import { ChildProcess } from 'child_process'
import React, { Children } from 'react'

function AdminLayout({children} : {children : React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}

export default AdminLayout