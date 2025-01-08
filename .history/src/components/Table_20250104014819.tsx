import React from 'react'

const tableCss = `
    .table{
        display: flex;
        flex-direction: column;
    }
    .thead{
        display: flex;
        flex-direction: row;
        gap: 5rem;
        background-color: rgba(28, 28, 28, 0.9);;
        padding: 1.5rem;
        border-radius: 2rem;
    }
    .trow{
    }
`

const Table = () => {
  return (
    <div className='table'>
        <style>{tableCss}</style>
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