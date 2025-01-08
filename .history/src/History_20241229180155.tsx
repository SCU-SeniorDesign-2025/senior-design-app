import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";

import { useNavigate } from "react-router";
import { useState } from 'react';

function History() {
    const nav = useNavigate();
    const [collapse, setCollapse] = useState(false);

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
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </div>
    )
}
  
  export default History;