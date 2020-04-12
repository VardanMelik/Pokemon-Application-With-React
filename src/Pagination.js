import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
    return(
        <div>
            {gotoPrevPage && <button className="btn btn-secondary" style={{margin: "8px"}} onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button className="btn btn-info" style={{margin: "8px"}} onClick={gotoNextPage}>Next</button>}
            
        </div>
    )
}
export default Pagination


