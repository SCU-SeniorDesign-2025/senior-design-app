import React from 'react'

const presetCss = `
  .preset-container{
    width: 32%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .preset{
    background-color: gray;
    border-radius: .5rem;
    height: 200px;
    width: 150px;
    margin: 1.5rem 0;

  }
`
const PresetSelect = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', 
    flexWrap: 'wrap', backgroundColor: 'var(--bg-89)', marginTop: '50px'
    }}>
      <style>{presetCss}</style>
      <h3 style={{width:'100%'}}>Design:</h3>
      <div className='preset-container'>
        <div className='preset'></div>
        <h5>Preset 1</h5>
      </div>
      <div className='preset-container'>
        <div className='preset'></div>
        <h5>Preset 2</h5>
      </div>
      <div className='preset-container'>
        <div className='preset'></div>
        <h5>Preset 3</h5>
      </div>
    </div>
  )
}

export default PresetSelect