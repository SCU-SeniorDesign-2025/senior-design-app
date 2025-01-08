import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const SideBar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4rem'}}>
        <FontAwesomeIcon style={{color: 'var(--accent-100)'}} icon={faBars} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)'}} icon={faHouse} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)'}} icon={faPlus} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)'}} icon={faChartSimple} />
    </div>
  )
}

export default SideBar