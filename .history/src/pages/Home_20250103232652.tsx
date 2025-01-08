import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';

interface typeJob {
  title: string,
  account: string,
  r_time: number,
  t_time: number,
  status: string
}
const Home = () => {
  const [currJob, setCurrJob] = useState<typeJob>({
    title: 'Faculty Name Tags V2',
    account: 'TaskMaster',
    r_time: 1.75,
    t_time: 3.00,
    status: 'In Progress'
  })

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
      <SideBar currPage='home'/>
      <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Home</h1>
      <h3>{currJob.title}</h3>
      <div style={{display:'flex', flexDirection: 'row', gap:20}}>
        <DisplayCard title='Account' info={currJob.account} black_bg={true} status={false}/>
        <DisplayCard title='Remaining Time' info={currJob.r_time+' hrs'} black_bg={false} status={false}/>
        <DisplayCard title='Total Time' info={currJob.t_time+' hrs'} black_bg={true} status={false}/>
        <DisplayCard title='Status' info={currJob.status} black_bg={false} status={true}/>
      </div>
    </div>
  )
}

export default Home