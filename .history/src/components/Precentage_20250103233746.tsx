import React from 'react'

const precentCss = `
    .precent-container{
        display: flex;
        flexDirection: row;
    }
    .precent-part{
        height: 1rem;
        width: .75rem;
        background-color: var(--text-20);
        margin: 0 .2rem;
    }
`

const Precentage = () => {
  return (
    <div>
        <style>{precentCss}</style>
        <div>30%</div>
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
        <h5>5m ago</h5>
        <h5>now</h5>
    </div>
  )
}

export default Precentage