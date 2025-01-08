import InputField from '../components/InputField';
import Button from '../components/Button';

/********** styled components **********/

function Login() {

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      width: '50%'
    }}>
      <h1> Welcome To AWC </h1>
      <h2> Name IT! </h2>
      <br></br>
      <InputField placeholder='Username' label='Username' />
      <br></br>
      <InputField placeholder='Password' label='Password' />
      <br></br>
      <br></br>
      <Button text='Login' />
    </div>
  )
}

export default Login;
