import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';


const Jobs = () => {
  const nav = useNavigate();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center'}}>
      <SideBar currPage='jobs'/>
      <h1 style={{ position: 'absolute', top: 0, left: '40rem'}}>Jobs</h1>
      <Table/>
    </div>
  )
}

export default Jobs