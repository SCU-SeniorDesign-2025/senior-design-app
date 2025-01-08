import React from 'react'
import SideBar from '../components/SideBar'

const Create_Tags = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='home'/>
      <h1 style={{ position: 'absolute', top: 0, left: '25rem'}}>Name Tag Creation</h1>
    </div>
  )
}

export default Create_Tags