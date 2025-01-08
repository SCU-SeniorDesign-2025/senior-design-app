import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
/********** styled components **********/
const ScuIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: 10vw;
  width: 10rem;
  height: 4rem;
`
enum StatType { Failure = 0, Success = 1, Working = 2 }

function Home() {
  const jobInfo = { //dumby data
    name: 'Faculty Name Tags',
    total_time: 2.00, //2 hours
    remain_time: 1.75, //15 mins
    account: 'TaskMaster',
    status: StatType.Success
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <FontAwesomeIcon icon={faBars} style={{height: '3rem', width: '3rem', position: 'absolute', left: '1rem', top:'1rem'}}/>
      <h2> Home </h2>
      <div style={{display: 'flex', gap: '5rem', flexDirection: 'row', marginTop: '3rem'}}>
        <h3> Current Job: {jobInfo.status} </h3>
        <h3> Estimated Time: {jobInfo.remain_time}</h3>
      </div>
      <div>
        <h2> Progress: {(jobInfo.remain_time/jobInfo.total_time)*100}%</h2>
        <progress value={jobInfo.remain_time} max={jobInfo.total_time}></progress>
      </div>
      <div style={{display: 'flex', gap: '5rem', flexDirection: 'row', marginTop: '3rem'}}>
        <h2> Account: {jobInfo.account}</h2>
        <h2> Status: </h2> 
        <h2 style={{color: `${jobInfo.status===1? 'red' : jobInfo.status===2? 'green' : 'yellow'}`}}> 
          {jobInfo.status===1 ? 'Failure' : jobInfo.status===2 ? 'Success' : 'Working'} 
          {jobInfo.status}
        </h2>
      </div>
    </div>
  )
}

export default Home;


/* NOTES 
 - use the fontAwesome icons more often they work well, easy to scale, and respond to theme changes

*/