import styled from 'styled-components';

import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
/********** styled components **********/
const ScuIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: 10vw;
  width: 10rem;
  height: 4rem;
`
const Container = styled.div`
  /* border-radius: 15px;
  background-color: ${p => p.theme.primary};
  box-shadow: ${p => p.theme.color_shadow} 0px 3px 8px; */
  padding: 15px;
  margin: 15px;
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.text_primary};
  border: 1px solid ${p => p.theme.shadow};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 8px ${p => p.theme.shadow};
  &:hover{
    transform: scale(1.05)
  }
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
  const nav = useNavigate();
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
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Sidebar collapsed={collapse} style={{padding: 0, margin: 0, height: '100vh'}}>
        <Menu>
          <MenuItem icon={<IoIosMenu style={{height: 50, width: 50}}/>} onClick={() => setCollapse(!collapse)}></MenuItem>
          <MenuItem icon={<FaHome style={{height: 50, width: 50}}/>} onClick={() => nav('/home')}> Home </MenuItem>
          <MenuItem icon={<FaHistory style={{height: 50, width: 50}}/>} onClick={() => nav('/history')}> History </MenuItem>
          <MenuItem icon={<IoIosCreate style={{height: 50, width: 50}}/>} onClick={() => nav('/create')}> New Job </MenuItem>
        </Menu>
      </Sidebar>
      <div style={{paddingLeft: 30, display: 'flex', alignItems: 'center', width: '85vw', flexDirection: 'column'}}>
        <h2 style={{marginBottom: 40}}> Home </h2>
        <h3 style={{margin: 10}}> <u> {jobInfo.name} </u> </h3>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Container>
            <h4 style={{margin: 10}}> Estimated Time: &nbsp; {jobInfo.remain_time} hrs</h4>
            <h4 style={{margin: 10}}> Total Time: &nbsp; {jobInfo.total_time} hrs</h4>
            <div style={{height: 150, width: 150, margin: 10}}><CircularProgressbar styles={buildStyles({
              pathColor: '#EF241D',
              textColor: '#F5F5A4',
              trailColor: '#761212',
            })} value={value} maxValue={maxVal} text={`${precentage * 100}%`} /> </div>
          </Container>
          <Container>
            <h4> Account: {jobInfo.account}</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <h4> Status: &nbsp;</h4> 
              <h4 style={{color: `${jobInfo.status===1? 'green' : jobInfo.status===2? 'yellow' : 'red'}`}}> 
                {jobInfo.status===1 ? 'Success' : jobInfo.status===2 ? 'Working' : 'Failure'} 
              </h4>
            </div>
          </Container>
        </div>

      </div>
    </div>
  )
}

export default Home;


/* NOTES 
 - use the fontAwesome icons more often they work well, easy to scale, and respond to theme changes

*/