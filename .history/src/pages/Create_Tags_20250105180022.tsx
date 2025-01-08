import React from 'react'
import SideBar from '../components/SideBar'
import InputField from '../components/InputField'
import PresetSelect from '../components/PresetSelect'
import Preview from '../components/Preview'
import DisplayCard from '../components/DisplayCard'
import DropDown from '../components/DropDown'

const Create_Tags = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='create'/>
      <h2 style={{ position: 'absolute', top: 0, left: '30rem'}}>Name Tag Creation</h2>
      <div style={{display: 'flex', 
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '700px',
        marginTop: '200px',
        gap: '1rem'
      }}>
        <InputField placeholder='Title' label='Title' getInputVal={() => console.log('hi')}/>
        <InputField placeholder='Names' label='Names' getInputVal={() => console.log('hi')}/>
        <DropDown placeholder='School' label='School' getInputVal={() => console.log('hi')}/>
        <PresetSelect />
        <Preview />
        <DisplayCard info='Time Est: 5.34 hrs' black_bg={true} status={false}/>
      </div>
    </div>
  )
}

export default Create_Tags