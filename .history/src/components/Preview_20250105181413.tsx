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
    <div>
      <h3> Preview </h3>
      <div style={{backgroundColor: 'var(--accent-100)', borderRadius: '.5rem', height: '10rem', width: '15rem'}}>
        <div>
          <div>
            <h5></h5>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview