import React from 'react'
import SideBar from '../components/SideBar'
import InputField from '../components/InputField'
import PresetSelect from '../components/PresetSelect'
import Preview from '../components/Preview'
import DisplayCard from '../components/DisplayCard'
import DropDown from '../components/DropDown'
import Button from '../components/Button'
import TimeSelect from '../components/TimeSelect'

const Create_Plates = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center',
        position: 'absolute',
        top: 0,
        justifyContent:'center',
        width: '700px',
        minHeight: '100%'
    }}>
      <SideBar currPage='create'/>
      <h2>Name Tag Creation</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem'}}>
        <InputField placeholder='Title' label='Title' getInputVal={() => console.log('hi')}/>
        <InputField placeholder='Names' label='Names' getInputVal={() => console.log('hi')}/>
        <DropDown placeholder='School' label='School' getInputVal={() => console.log('hi')}/>
        <TimeSelect />
        <PresetSelect />
        <Preview />
        <DisplayCard fullWidth={true} info='Time Est: 2.66 hrs' black_bg={true} status={false}/>
        <Button text={'Start Job'} onClick={() => console.log('hi')}/>
      </div>
    </div>
  )
}

export default Create_Plates