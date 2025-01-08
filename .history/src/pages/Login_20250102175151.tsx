import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from "react-router";
import InputField from '../components/InputField';

/********** styled components **********/

function Login() {

  return (
    <div style={{
      display: 'flex', 
      justifyContent:'center',
      alignItems: 'center',
      width: '50%'
    }}>
      <h1> Welcome To AWC </h1>
      <h3> Name IT! </h3>
      <InputField placeholder='Username' label='Username'/>
      <InputField placeholder='Password' label='Password'/>
    </div>
  )
}

export default Login;
