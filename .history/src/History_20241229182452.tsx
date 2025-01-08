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
        {name: 'peter', status: 2, time: 1.222, account: 'Engineering Department Head'},
        {name: 'annie', status: 1, time: 2.02, account: 'Physics Department Head'},
        {name: 'john', status: 0, time: 3.12, account: 'Art Department Head'},
        {name: 'michelle', status: 1, time: 6.11, account: 'Theater Department Head'},
      ];

      //set data for react
      setData(dummyData);
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
      <div style={{paddingLeft: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '85vw', flexDirection: 'column'}}>
        <table style={{border:'1px solid #EEEEEE', width: '80%'}}>
          <tr style={{display:'flex',}}>
            <th>Name</th>
            <th>Status</th>
            <th>Time</th>
            <th>Account</th>
          </tr>
          {
            data.map(d => (
              <tr>
                <td>{d.name}</td>
                <td style={{color: `${d.status===1? 'green' : d.status===2? 'yellow' : 'red'}`}}>
                  {d.status===1? 'success' : d.status===2? 'pending' : 'failure' }
                </td>
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