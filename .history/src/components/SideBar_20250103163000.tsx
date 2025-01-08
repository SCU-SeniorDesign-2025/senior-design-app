import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';


const SideBar = () => {
    const nav = useNavigate();
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', height: '100vh', padding: '3rem 2rem'}}>
            <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} onClick={() => nav('/home')} icon={faBars} />
            <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} onClick={() => nav('/home')} icon={faHouse} />
            <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} onClick={() => nav('/jobs')} icon={faPlus} />
            <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} onClick={() => nav('/create')} icon={faChartSimple} />
        </div>
    )
}

export default SideBar