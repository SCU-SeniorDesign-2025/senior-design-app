import React from 'react'

const tableCss = `
    .table{
        display: flex;
        flex-direction: column;
    }
    .thead{
        display: flex;
        flex-direction: row;
    }
    .trow{
    }
`

const Table = () => {
  return (
    <div className='table'>
        <style></style>
        <div className='thead'>
            <h3>Job Name</h3>
            <h3>Status</h3>
            <h3>Time</h3>
            <h3>Account</h3>
        </div>
    </div>
  )
}

export default Table