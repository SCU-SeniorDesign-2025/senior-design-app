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
    `;

    return (
        <div>
        </div>
    )
}

export default Create_Tag;