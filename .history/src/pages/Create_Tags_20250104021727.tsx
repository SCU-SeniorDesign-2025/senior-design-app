import React from 'react'

const Create_Tags = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
    <SideBar currPage='home'/>
    <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Name Tag Creation</h1>
    <h3>{currJob.title}</h3>
    <div style={{display:'flex', flexDirection: 'row', gap:20, marginBottom: '2rem'}}>
      <DisplayCard title='Account' info={currJob.account} black_bg={true} status={false}/>
      <DisplayCard title='Remaining Time' info={currJob.r_time+' hrs'} black_bg={false} status={false}/>
      <DisplayCard title='Total Time' info={currJob.t_time+' hrs'} black_bg={true} status={false}/>
      <DisplayCard title='Status' info={currJob.status} black_bg={false} status={true}/>
    </div>
    <Precentage precent={.10}/>
    </div>
  )
}

export default Create_Tags