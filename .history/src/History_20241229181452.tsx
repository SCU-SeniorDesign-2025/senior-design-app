import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";

import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';

interface TableData {
  name: string;
  status: number;
  time: number;
  account: string;
}

function History() {
    const nav = useNavigate();
    const [data, setData] = useState<TableData[]>([]);
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
      //fetch data from server
      //.....

      //only use to test css -> dummy data
      const dummyData = [
        {name: 'peter', status: 1, time: 1.222, }
      ]

      //set data for react
      setData()
    }, [])

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
        <table>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Time</th>
            <th>Account</th>
          </tr>
          {
            data.map(d => (
              <tr>
                <td>{d.name}</td>
                <td>{d.status===1? 'success' : d.status===2? 'pending' : 'failure' }</td>
                <td>{d.time.toFixed(2)} hrs</td> 
                <td>{d.account}</td> 
              </tr>
            ))
          }
        </table>
      </div>
    </div>
    )
}
  
export default History;

//NOTE pending jobs should only be one and at top of list 