import React from 'react'

async function PaginationDemo({params} : {params : Promise<{pageNo : string}>}) {

    const {pageNo} = await params;
    const page = parseInt(pageNo);

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 9;
  return (
    <div>
        <h1>Pagination Demo</h1>
        <p>pageNo : {page}</p>
        <p>startIndex : {startIndex}</p>
        <p>endIndex : {endIndex}</p>
    </div>
  );
}

export default PaginationDemo