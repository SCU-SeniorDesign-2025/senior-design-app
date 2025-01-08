import React from 'react'
import SideBar from '../components/SideBar'
import InputField from '../components/InputField'

const Create_Tags = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='create'/>
      <h2 style={{ position: 'absolute', top: 0, left: '30rem'}}>Name Tag Creation</h2>
      <div style={{display: 'flex', 
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '50%'
      }}>
        <InputField placeholder='Title' label='Title' getInputVal={() => console.log('hi')}/>
        <InputField placeholder='Names' label='Names' getInputVal={() => console.log('hi')}/>
        {/* <DropDown placeholder='Title' label='Title' getInputVal={() => console.log('hi')}/> */}
      </div>
    </div>
  )
}

export default Create_Tags