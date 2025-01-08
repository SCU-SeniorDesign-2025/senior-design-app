import React from 'react'

const precentCss = `
    .precent-container{
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        width: fit-content;

    }
    .precent-part{
        height: 2.75rem;
        width: 1.15rem;
        border-radius: .5rem;
        background-color: var(--text-20);
        margin: 0 .2rem;
    }
`

const Precentage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <style>{precentCss}</style>
        <h2>30%</h2>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className='precent-container'>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
                <div className='precent-part'></div>
            </div>
            <h5 style={{width: '45%', marginLeft: '15px'}}>5m ago</h5>
            <h5 style={{width: '50%', textAlign: 'center'}}>now</h5>
        </div>
    </div>
  )
}

export default Precentage