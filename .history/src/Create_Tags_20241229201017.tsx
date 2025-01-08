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
const StyledSelect = styled.select`
    margin-left: 1.5rem;
    border-radius: .5rem; 
    width: 20rem;
    height: 2rem;
    background: ${p => p.theme.secondary};
    color: ${p => p.theme.text};
`
const Preset = styled.div`
    width: 30%;
    margin: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    border-radius: .5rem;
    height: 50%;
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
                
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '50%', alignItems: 'center' }}>
                    <h4 style={{width: '20%'}}>Name: </h4><StyledInput style={{width: '70%'}} placeholder='Bucky Bronco'/>
                    <h4 style={{width: '20%'}}>Title: </h4><StyledInput style={{width: '70%'}} placeholder='Optional'/>
                    <h4 style={{width: '20%'}}>School: </h4>
                    <StyledSelect style={{width: '70%'}}>
                        <option value={1}>School of Engineering</option>
                        <option value={2}>Leavey School of Business</option>
                        <option value={3}>College or Arts and Sciences</option>
                        <option value={4}>School of Law</option>
                        <option value={5}>school of Education and Counseling Psychology</option>
                        <option value={6}>Jesuit School of Theology</option>
                    </StyledSelect>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '50%', alignItems: 'center' }}>
                    <h4 style={{width: '100%', marginTop: '50px'}}> Design: </h4>
                    <Preset> Preset 1 </Preset>
                    <Preset> Preset 2 </Preset>
                    <Preset> Preset 3 </Preset>
                    <h4  style={{width: '100%', marginTop: '50px'}}> Preview: </h4>
                    <div style={{width: '100%'}}> asdf </div>
                </div>
            </div>
        </div>
    )
}

export default Create_Tags;