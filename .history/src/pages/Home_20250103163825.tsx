import React from 'react'
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <>
      <SideBar style={{position: 'absolute', top: 0, left: 0}} />
      <div style={{color: 'var(--accent-100)'}}>Home</div>
    </>
  )
}

export default Home