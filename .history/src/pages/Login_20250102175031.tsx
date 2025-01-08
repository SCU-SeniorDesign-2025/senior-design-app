import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from "react-router";
import InputField from '../components/InputField';

/********** styled components **********/

function Login() {

  return (
    <>
      <h1> Welcome To AWC </h1>
      <h3> Name IT! </h3>
      <InputField placeholder='Username', label='username'/>
    </>
  )
}

export default Login;
