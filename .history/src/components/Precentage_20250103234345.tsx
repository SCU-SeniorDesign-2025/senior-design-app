import React from 'react'

const precentCss = `
    .precent-container{
        display: flex;
        flexDirection: row;
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
    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        <style>{precentCss}</style>
        <h2>30%</h2>
        <div style={{display: 'flex', flexDirection: 'column'}}>
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
            <h5 style={{flexBasis: 1}}>5m ago</h5>
            <h5 style={{flexBasis: 1}}>now</h5>
        </div>
    </div>
  )
}

export default Precentage