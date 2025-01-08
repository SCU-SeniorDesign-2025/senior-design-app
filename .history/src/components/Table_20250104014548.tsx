import React from 'react'

const tableCss = `
    .table{
        display: flex;
        flex-direction: column;
    }
    .thead{
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
    .trow{
    }
`

const Table = () => {
  return (
    <div className='table'>
        <style>{tableCss}</style>
        <div className='thead'>
            <h4>Job Name</h4>
            <h4>Status</h4>
            <h4>Time</h4>
            <h4>Account</h4>
        </div>
    </div>
  )
}

export default Table