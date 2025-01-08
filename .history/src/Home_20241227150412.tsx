import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";



import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
/********** styled components **********/
const ScuIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: 10vw;
  width: 10rem;
  height: 4rem;
`


enum StatType { Failure = 0, Success = 1, Working = 2 }
interface Jobs { 
  name: string,
  total_time: number,
  remain_time: number,
  account: string,
  status: number
}

function Home() {
  const [collapse, setCollapse] = useState(true);
  const jobInfo = { //dumby data
    name: 'Faculty Name Tags',
    total_time: 2.00, //2 hours
    remain_time: 1.75, //15 mins
    account: 'TaskMaster',
    status: StatType.Success
  }
  const value = jobInfo.remain_time;
  const maxVal = jobInfo.total_time;
  const precentage = jobInfo.remain_time/jobInfo.total_time;
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{position: 'absolute', top: '1rem', left: '.5rem'}}>
        <IoIosMenu onClick={() => setCollapse(!collapse)}/>
        <Sidebar collapsed={false}>
          <Menu>
            <MenuItem icon={<FaHome />}> Home </MenuItem>
            <MenuItem icon={<FaHistory />}> History </MenuItem>
            <MenuItem icon={<IoIosCreate />}> New Job </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <h2> Home </h2>
      <div style={{display: 'flex', gap: '5rem', flexDirection: 'row', marginTop: '3rem'}}>
        <h3> Current Job: {jobInfo.name} </h3>
        <h3> Estimated Time:{jobInfo.remain_time} hrs</h3>
      </div>
      <div style={{ width: 200, height: 200, marginTop: 30}}>
        <CircularProgressbar styles={buildStyles({
          pathColor: '#EF241D',
          textColor: '#F5F5A4',
          trailColor: '#761212',
        })}
        value={value} maxValue={maxVal} text={`${precentage * 100}%`} />;
      </div>
      <div style={{display: 'flex', gap: '5rem', flexDirection: 'row', marginTop: '3rem'}}>
        <h3> Account: {jobInfo.account}</h3>
        <h3> Status: </h3> 
        <h3 style={{color: `${jobInfo.status===1? 'green' : jobInfo.status===2? 'yellow' : 'red'}`}}> 
          {jobInfo.status===1 ? 'Success' : jobInfo.status===2 ? 'Working' : 'Failure'} 
        </h3>
      </div>
    </div>
  )
}

export default Home;


/* NOTES 
 - use the fontAwesome icons more often they work well, easy to scale, and respond to theme changes

*/