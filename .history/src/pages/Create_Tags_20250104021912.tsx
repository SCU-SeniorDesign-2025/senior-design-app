import React from 'react'
import SideBar from '../components/SideBar'
import InputField from '../components/InputField'

const Create_Tags = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='create'/>
      <h2 style={{ position: 'absolute', top: 0, left: '30rem'}}>Name Tag Creation</h2>
      <InputField placeholder='Title' label='title'/>
    </div>
  )
}

export default Create_Tags