import styled from 'styled-components';

import { FaHome, FaHistory } from "react-icons/fa";
import { IoIosCreate, IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useEffect, useState, useRef } from 'react';

const StyledInput = styled.input`
  color: ${p => p.theme.text};
  background: ${p => p.theme.secondary};
  width: 15rem;
  height: 2rem;
  border: 0px;
  border-radius: .5rem;
  margin: 1.5rem;
  font-size: 1.4rem;
  padding: 1rem;
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
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.secondary};
    color: ${p => p.theme.text};
    border-radius: .5rem;
    box-shadow: ${p => p.theme.primary} 0px 3px 8px;
    height: 50%;
    &:hover{
        transform: scale(1.09)
    }
`
const Preview = styled.div`
    width: 100%;
    margin: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.secondary};
    color: ${p => p.theme.text};
    border-radius: .5rem;
    box-shadow: ${p => p.theme.primary} 0px 3px 8px;
    height: 90%;
`
const LongerBacking = styled.div`
    display: flex;
    flex-direction: row;
    background: #260D0D;
    height: 170vh;
`
const SubmitButton = styled.div`
    border-radius: 15px;
    background-color: ${p => p.theme.primary};
    box-shadow: ${p => p.theme.accent} 0px 3px 8px;
    padding: 1rem;
    margin: '30px 0px';
    &:hover{
        transform: scale(1.05)
    }
`
// type FormEvent = React.FormEvent<HTMLFormElement>
// type MouseEvent = React.MouseEvent<HTMLButtonElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

const Create_Tags = () => {
    const [collapse, setCollapse] = useState(true);
    const nameRef = useRef<HTMLInputElement>();
    const titleRef = useRef<HTMLInputElement>();

    const nav = useNavigate();

    const handleOtherEvents = (event:ChangeEvent, type:string) => {
        switch(type){
            case 'select':
                console.log('select value: ', event.currentTarget.value);
                break;
            case 'preset_1':
                console.log(event.currentTarget.value);
                break;
            case 'preset_2':
                console.log(event.currentTarget.value);
                break;
            case 'preset_3':
                console.log(event.currentTarget.value);
                break;
            default:
                console.log('nothing!');
                break;
        }
        console.log('name: ', nameRef.current?.value, ' ; title: ', titleRef.current?.value);
    }
    const handleSubmit = () => {
        console.log('submit button clicked');
    }

    return (
        <LongerBacking>
            <Sidebar collapsed={collapse} style={{padding: 0, margin: 0, height: '170vh'}}>
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
                    <h4 style={{width: '20%'}}>Title: </h4><StyledInput ref={titleRef} style={{width: '70%'}} placeholder='Optional'/>
                    <h4 style={{width: '20%'}}>Names: </h4><StyledInput ref={nameRef} style={{width: '70%'}} placeholder='John Doe, Jane Doe, Lisa Doe, Etc...'/>
                    <h4 style={{width: '20%'}}>School: </h4>
                    <StyledSelect style={{width: '70%'}} onChange={(e:ChangeEvent) => handleOtherEvents(e, 'select')}>
                        <option value={1}>School of Engineering</option>
                        <option value={2}>Leavey School of Business</option>
                        <option value={3}>College or Arts and Sciences</option>
                        <option value={4}>School of Law</option>
                        <option value={5}>school of Education and Counseling Psychology</option>
                        <option value={6}>Jesuit School of Theology</option>
                    </StyledSelect>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '50%', alignItems: 'center' }}>
                    <h4 style={{width: '100%', marginTop: '50px', marginBottom: '20px'}}> Design: </h4>
                    <Preset onClick={(e) => handleOtherEvents(e, 'preset_1')}> Preset 1 </Preset>
                    <Preset onClick={(e) => handleOtherEvents(e, 'preset_2')}> Preset 2 </Preset>
                    <Preset onClick={(e) => handleOtherEvents(e, 'preset_3')}> Preset 3 </Preset>
                    <h4 style={{width: '100%', marginTop: '30px'}}> Preview: </h4>
                    <Preview/>
                    <h4 style={{width: '100%', margin: '30px 0px'}}> Time Estimate: {5} hrs</h4>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <SubmitButton onClick={handleSubmit}> Start Job </SubmitButton>
                    </div>
                </div>
            </div>
        </LongerBacking>
    )
}

export default Create_Tags;