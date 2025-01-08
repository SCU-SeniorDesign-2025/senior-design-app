import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const nav = useNavigate();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='home'/>
      <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Start Jobs</h1>
      <h3>What Would You Like To Make?</h3>
      <div style={{display:'flex', flexDirection: 'row', gap:20, marginBottom: '2rem'}}>
        <DisplayCard info='Create Name Tags' black_bg={true} status={false} fn={() => nav('/create_tags')}/>
        <DisplayCard info='Create Name Plates' black_bg={false} status={false} fn={() => nav('/create_plates')}/>
        <DisplayCard info='Create Signage' black_bg={true} status={false} fn={() => nav('/create_signage')}/>
      </div>
    </div>
  )
}

export default Create