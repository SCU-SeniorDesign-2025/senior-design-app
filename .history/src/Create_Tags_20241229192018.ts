import styled from 'styled-components';

import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';

const Create_Tag = () => {
    const [collapse, setCollapse] = useState(true);
    const nav = useNavigate();

    const LargeButton = styled.div`
        border-radius: 15px;
        box-shadow: ${p => p.theme.accent} 0px 3px 8px;
        padding: 1.5rem;
        margin: 1.5rem;
        &:hover{
            transform: scale(1.05)
        }
    `

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
            <div style={{display: 'flex', alignItems: 'center', width: '85%', flexDirection: 'column'}}>
                <h3 style={{marginTop: 20}}> Create Name Tags </h3>
                
                
            </div>
        </div>
    )
}

export default Create_Tag;