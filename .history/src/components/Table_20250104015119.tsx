import React from 'react'

const tableCss = `
    .table{
        display: flex;
        flex-direction: column;
    }
    .thead{
        display: flex;
        flex-direction: row;
        gap: 8rem;
        background-color: var(--bg-88);
        padding: 1rem;
        border-radius: 1.5rem;
    }
    .trow{
        display: flex;
        flex-direction: row;
        gap: 8rem;
        background-color: var(--bg-88);
        padding: 1rem;
        border-radius: 1.5rem;
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
        <div className='trow'>
            <p style={{color: 'var(--text-100)'}}>Engr Nametags</p>
            <p>working</p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default Table