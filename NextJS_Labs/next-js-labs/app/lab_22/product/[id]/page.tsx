import { promises } from 'dns'
import React from 'react'

async function ProductIDPage({params} : {params : Promise<{id : string}>}) {
    const {id} = await params

  return (
        <div><h1>Product ID : {id}</h1></div>
  )
}
export default ProductIDPage;