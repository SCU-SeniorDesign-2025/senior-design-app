import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const SideBar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faChartSimple} />
    </div>
  )
}

export default SideBar