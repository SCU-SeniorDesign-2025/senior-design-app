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
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <style>{precentCss}</style>
        <h2>30%</h2>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '610px'}}>
            <div style={{flex: '1'}}className='precent-container'>
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
            <h5 style={{flex: '1'}}>5m ago</h5>
            <h5 style={{flex: '1'}}>now</h5>
        </div>
    </div>
  )
}

export default Precentage