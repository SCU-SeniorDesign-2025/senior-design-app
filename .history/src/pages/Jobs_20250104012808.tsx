import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';
import Precentage from '../components/Precentage';


const Jobs = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='home'/>
      <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Jobs</h1>
      <h3>What Would You Like To Make?</h3>
      <div style={{display:'flex', flexDirection: 'row', gap:20, marginBottom: '2rem'}}>
        <DisplayCard title='' info='Create Name Tags' black_bg={true} status={false}/>
        <DisplayCard title='' info='Create Name Plates' black_bg={false} status={false}/>
        <DisplayCard title='' info='Create Signage' black_bg={true} status={false}/>
      </div>
    </div>
  )
}

export default Jobs