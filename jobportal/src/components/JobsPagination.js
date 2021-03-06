import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ({ page, setPage, hasNextPage }) => {

  function adjustPage(amount) {
         setPage(prevPage => prevPage + amount)
     }

  return ( 
    <>
    <div className="detail mb-2"> Page : </div>
    <Pagination className="mb-4 pag"> 
        {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
        {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
        {page > 2 && <Pagination.Ellipsis />}
        {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
        <Pagination.Item className="active">{page}</Pagination.Item>
        {/* {page !== hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>} */}
        {page !== hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
     </Pagination>
     </>
   );
}
 
export default JobsPagination;

