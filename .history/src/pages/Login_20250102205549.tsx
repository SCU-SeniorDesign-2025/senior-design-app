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
      border: '1px solid var(--text-100)',
      width: '50%'
    }}>
      <h1> Welcome To AWC </h1>
      <h3> Name IT! </h3>
      <InputField placeholder='Username' label='Username' />
      <InputField placeholder='Password' label='Password' />
      <br></br>
      <Button text='Login' />
    </div>
  )
}

export default Login;
