import React, { useState } from 'react'

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
        gap: 10rem;
        background-color: var(--bg-88);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 1.5rem;
    }
`

interface typeTable {
    job: string;
    status: string;
    time: number;
    account: string;
}
const Table = () => {
    const [tableData, setTableData] = useState<typeTable[]>();
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
                <h5>Engr Nametags</h5>
                <h5 style={{color: 'var(--warning)'}}>working</h5>
                <h5>1.5 hrs</h5>
                <h5>Engr head</h5>
            </div>
        </div>
    )
}

export default Table