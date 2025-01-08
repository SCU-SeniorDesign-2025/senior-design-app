import React from 'react'
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <>
      <SideBar currPage='home'/>
      <div style={{color: 'var(--accent-100)'}}>Home</div>
    </>
  )
}

export default Home