import React from 'react'
import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';

const Home = () => {
  return (
    <>
      <SideBar currPage='home'/>
      <div style={{color: 'var(--accent-100)'}}>Home</div>
      <div style={{display:'flex', flexDirection: 'row', gap: 10}}>
        <DisplayCard title='Account' info='TaskMaster' black_bg={true} status={false}/>
        <DisplayCard title='Remaining Time' info='1.75 hrs' black_bg={false} status={false}/>
        <DisplayCard title='Total Time' info='3 hrs' black_bg={true} status={false}/>
        <DisplayCard title='Status' info='In Progress' black_bg={false} status={true}/>
      </div>
    </>
  )
}

export default Home