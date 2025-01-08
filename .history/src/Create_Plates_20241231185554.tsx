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
`;
const StyledSelect = styled.select`
  margin-left: 1.5rem;
  border-radius: .5rem; 
  width: 20rem;
  height: 2rem;
  background: ${p => p.theme.secondary};
  color: ${p => p.theme.text};
`;
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
  &:hover {
    transform: scale(1.09);
  }
`;
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
`;
const LongerBacking = styled.div`
  display: flex;
  flex-direction: row;
  background: #260D0D;
  height: 170vh;
`;
const SubmitButton = styled.div`
  border-radius: 15px;
  background-color: ${p => p.theme.primary};
  box-shadow: ${p => p.theme.accent} 0px 3px 8px;
  padding: 1rem;
  margin: 30px 0px;
  &:hover {
    transform: scale(1.05);
  }
`;

interface NameTagData {
  title: string;
  names: string;
  school: string;
  preset: string;
}

const Create_Tags = () => {
    const [collapse, setCollapse] = useState(true);
    const [userData, setUserData] = useState<NameTagData>({
    title: '',
    names: '',
    school: '',
    preset: '',
    });

    const nameRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    const nav = useNavigate();

    const handleOtherEvents = (type: string, value: string) => {
        setUserData(prev => ({
            ...prev,
            [type]: value,
            names: nameRef.current?.value || '',
            title: titleRef.current?.value || '',
        }));
    };

    const handleSubmit = () => {
        console.log('Submit button clicked');
        console.log('User data:', userData);
    };

    useEffect(() => {
        // if(userData.preset) //send partial data to server
            
    }, [userData])

    return (
    <LongerBacking>
        <Sidebar collapsed={collapse} style={{ padding: 0, margin: 0, height: '170vh' }}>
        <Menu>
            <MenuItem icon={<IoIosMenu style={{ height: 50, width: 50 }} />} onClick={() => setCollapse(!collapse)}></MenuItem>
            <MenuItem icon={<FaHome style={{ height: 50, width: 50 }} />} onClick={() => nav('/home')}>Home</MenuItem>
            <MenuItem icon={<FaHistory style={{ height: 50, width: 50 }} />} onClick={() => nav('/history')}>History</MenuItem>
            <MenuItem icon={<IoIosCreate style={{ height: 50, width: 50 }} />} onClick={() => nav('/create')}>New Job</MenuItem>
        </Menu>
        </Sidebar>
        <div style={{ display: 'flex', alignItems: 'center', width: '85%', height: '200vh', flexDirection: 'column' }}>
        <h3 style={{ marginTop: 20, marginBottom: 50 }}>Create Name Plates</h3>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '50%', alignItems: 'center' }}>
            <h4 style={{ width: '20%' }}>Title: </h4>
            <StyledInput ref={titleRef} style={{ width: '70%' }} placeholder="Optional" />
            <h4 style={{ width: '20%' }}>Names: </h4>
            <StyledInput ref={nameRef} style={{ width: '70%' }} placeholder="John Doe, Jane Doe, Lisa Doe, Etc..." />
            <h4 style={{ width: '100%', marginTop: 30 }}>Additional Information: </h4>
            <h4 style={{ width: '25%' }}>Room #: </h4> <StyledInput ref={nameRef} style={{ width: '60%' }} placeholder="Rm 109" />
            <h4 style={{ width: '35%'}}>Office Hrs: </h4> <StyledInput ref={nameRef} style={{ width: '55%' }} placeholder="MWF 9-10am, TTH 10-12pm" />
        
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '50%', alignItems: 'center' }}>
            <h4 style={{ width: '100%', marginTop: '50px', marginBottom: '20px' }}>Design:</h4>
            <Preset onClick={() => handleOtherEvents('preset', 'preset_1')}>Preset 1</Preset>
            <Preset onClick={() => handleOtherEvents('preset', 'preset_2')}>Preset 2</Preset>
            <Preset onClick={() => handleOtherEvents('preset', 'preset_3')}>Preset 3</Preset>
            <h4 style={{ width: '100%', marginTop: '30px' }}>Preview:</h4>
            <Preview />
            <h4 style={{ width: '100%', margin: '30px 0px' }}>Time Estimate: 5 hrs</h4>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <SubmitButton onClick={handleSubmit}>Start Job</SubmitButton>
            </div>
        </div>
        </div>
    </LongerBacking>
    );
};

export default Create_Tags;
