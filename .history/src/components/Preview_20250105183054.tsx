import React from 'react'

const divCss = ` 
    .displayCard{
        border-radius: 1rem;
        color: var(--text-100);
        padding: 2rem;
    }
    .classic_black{
        background-color: var(--bg-89);
    }
    .accent_avant{
        background-color: var(--accent-30);
    }
    
`

const Preview = () => {
  return (
    <div style={{backgroundColor: 'var(--accent-30)', borderRadius: '.5rem', height: '24rem', width: '41rem', display: 'flex', flexDirection: 'column', padding: '1.5rem'}}>
      <h3> Preview </h3>
      <div style={{backgroundColor: 'var(--text-20)', borderRadius: '.5rem', height: '90%', width: '100%', padding: '1rem'}}>
        <div style={{backgroundColor: 'var(--text-100)', borderRadius: '.5rem', height: '100%', width: '100%', padding: '1rem 2rem'}}>
          <div style={{backgroundColor: 'var(--bg-80)', borderRadius: '.5rem', height: '100%', width: '100%', padding: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '40%'}}>
            <h5>Name</h5>
            <div style={{backgroundColor: 'var(--text-20)', borderRadius: '.5rem', height: '100%', width: '50%', padding: '1rem'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview