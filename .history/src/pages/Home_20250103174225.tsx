import React from 'react'
import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';

const Home = () => {
  return (
    <>
      <SideBar currPage='home'/>
      <div style={{color: 'var(--accent-100)'}}>Home</div>
      <DisplayCard title='Account' info='TaskMaster' black_bg={false} />
    </>
  )
}

export default Home