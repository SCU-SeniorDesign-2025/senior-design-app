import React, { useEffect, useState } from 'react'

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
    .Success{
        color: var(--success);
    }
    .Warning{
        color: var(--warning);
    }
    .Failure{
        color: var(--failure);
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

    useEffect(() => {
        setTableData([
            {job: 'Engr Nametags', status: 'Working', time: 1.5, account: 'Engr Head'},
            {job: 'Physics Nametags', status: 'Success', time: 3.5, account: 'Physics Head'},
            {job: 'Comp Sci Nametags', status: 'Success', time: 4.5, account: 'Engr Head'},
            {job: 'Engr Nameplates', status: 'Success', time: 2.43, account: 'Engr Head'},
            {job: 'Engr Nameplates', status: 'Failure', time: 1.3, account: 'Engr Head'},
        ])
    }, [])
    return (
        <div style={{marginTop: '5rem'}} className='table'>
            <style>{tableCss}</style>
            <div className='thead'>
                <h4 style={{width: '35%'}}>Job Name</h4>
                <h4 style={{width: '15%'}}>Status</h4>
                <h4 style={{width: '25%'}}>Time</h4>
                <h4 style={{width: '25%'}}>Account</h4>
            </div>
            {tableData?.map(t => (
                <div className='trow'>
                    <h5 style={{width: '35%'}} >{t.job}</h5>
                    <h5 style={{width: '15%'}} className={t.status==='Working'?'Warning':t.status}>{t.status}</h5>
                    <h5 style={{width: '25%'}} >{t.time} hrs</h5>
                    <h5 style={{width: '25%'}} >{t.account}</h5>
                </div>
            ))

            }
        </div>
    )
}

export default Table