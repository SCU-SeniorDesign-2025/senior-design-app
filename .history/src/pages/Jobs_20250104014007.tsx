import SideBar from '../components/SideBar';
import DisplayCard from '../components/DisplayCard';
import { useNavigate } from 'react-router-dom';


const Jobs = () => {
  const nav = useNavigate();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='jobs'/>
      <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Jobs</h1>
      
    </div>
  )
}

export default Jobs