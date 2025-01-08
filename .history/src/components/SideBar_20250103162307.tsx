import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const SideBar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <FontAwesomeIcon style={{color: 'var(--accent-100)'}}icon={faBars} />
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faChartSimple} />
    </div>
  )
}

export default SideBar