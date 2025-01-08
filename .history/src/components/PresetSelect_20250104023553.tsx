import React from 'react'

const presetCss = `
  .preset-container{

  }
  .preset{
    background-color: gray;
    height: 300px;
    width: 100px;
    margin: 1rem 0;
  }
`
const PresetSelect = () => {
  return (
    <div>
      <style>{presetCss}</style>
      <h3>Design:</h3>
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