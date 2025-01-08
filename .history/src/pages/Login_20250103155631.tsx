import InputField from '../components/InputField';
import Button from '../components/Button';
import { useState } from 'react';

/********** styled components **********/

function Login() {
  const [textInput, setTextInput] = useState({
    Username: '',
    Password: ''
  });

  const getInputVal = (inputType: string, data: string | undefined) => {
    console.log('input type: ', inputType);
    console.log('data: ', data)
    setTextInput({
      ...textInput,
      [inputType]: data,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('text input: ', textInput);
  }

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      width: '50%'
    }}>
      <h1> Welcome To AWC </h1>
      <h2 style={{margin: '.5rem 0 2rem 0'}}> Name IT! </h2>
      <form onSubmit={handleSubmit}>
        <InputField getInputVal={getInputVal} placeholder='Username' label='Username' />
        <br></br>
        <InputField getInputVal={getInputVal} placeholder='Password' label='Password' />
        <br></br>
        <br></br>
        <Button type="submit" text='Login' /> 
      </form>
    </div>
  )
}

export default Login;
