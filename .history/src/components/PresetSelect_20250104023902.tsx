import React from 'react'

const presetCss = `
  .preset-container{
    width: 32%
  }
  .preset{
    background-color: gray;
    height: 200px;
    width: 100px;
    margin: 1.5rem 0;
  }
`
const PresetSelect = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <style>{presetCss}</style>
      <h3 style={{width:'100%', marginTop: '3rem'}}>Design:</h3>
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