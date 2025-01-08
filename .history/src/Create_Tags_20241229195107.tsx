import styled from 'styled-components';

import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';

const StyledInput = styled.input`
  color: ${p => p.theme.text};
  background: ${p => p.theme.secondary};
  width: 15rem;
  height: 2rem;
  border: 0px;
  border-radius: .5rem;
  margin: 1.5rem;
  font-size: 1.4rem;
  padding: 1.4rem;
`

const Create_Tags = () => {
    const [collapse, setCollapse] = useState(true);
    const nav = useNavigate();

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
                <h3 style={{marginTop: 20, marginBottom: 50}}> Create Name Tags </h3>
                
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: 450, alignItems: 'center' }}>
                    <h4 style={{width: 150}}>Name: </h4><StyledInput placeholder='Bucky Bronco'/>
                    <h4 style={{width: 150}}>Title: </h4><StyledInput placeholder='Optional'/>
                    <h4>School: </h4>
                    <select name="school" style={{margin: 10, border: '1px solid red'}}>
                        <option value={1}>School of Engineering</option>
                        <option value={2}>Leavey School of Business</option>
                        <option value={3}>College or Arts and Sciences</option>
                        <option value={4}>School of Law</option>
                        <option value={5}>school of Education and Counseling Psychology</option>
                        <option value={6}>Jesuit School of Theology</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Create_Tags;