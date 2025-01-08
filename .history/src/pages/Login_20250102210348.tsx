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
      <h2 style={{margin: '1rem 0 2rem 0'}}> Name IT! </h2>
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
