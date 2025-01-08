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
    .precent-indicator{
        height: 3rem;
        width: 5rem;
        border-radius: 1rem;
        margin-right: 1rem;
        text-align: center;
        background-color: var(--accent-100);
    }
`

const Precentage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <style>{precentCss}</style>
        <div className='precent-indicator'><h4>30%</h4></div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <div style={{marginBottom: '.3rem'}} className='precent-container'>
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