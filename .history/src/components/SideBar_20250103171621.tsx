import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';

const iconCss = `
    .iconStyle { 
        color: var(--text-100);
        height: 1.5rem;
        width: 1.5rem;
    }   
    .iconStyle:hover {
        transform: translateY(-3px);
    }
    .iconStyle:active {
        background-color: var(--bg-100);
        border-color: var(--text-100);
        color: var(--accent-100);
        transform: translateY(0);
    }
`

const SideBar = () => {
    const nav = useNavigate();

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: '6rem', height: '100vh', padding: '3rem 2rem',
            position: 'absolute', top: 0, left: 0
        }}>
            <style>{iconCss}</style>
            <FontAwesomeIcon className='iconStyle' onClick={() => nav('/home')} icon={faBars} />
            <FontAwesomeIcon className='iconStyle' onClick={() => nav('/home')} icon={faHouse} />
            <FontAwesomeIcon className='iconStyle' onClick={() => nav('/jobs')} icon={faPlus} />
            <FontAwesomeIcon className='iconStyle' onClick={() => nav('/create')} icon={faChartSimple} />
        </div>
    )
}

export default SideBar