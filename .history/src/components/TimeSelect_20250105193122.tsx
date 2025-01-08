import React, { useState } from 'react'

const TimeSelect = () => {
  return (
    <div>
        <div></div>
        <div></div>
    </div>
  )
}
const TimeDial = ({title}) => {
    const [hrs, setHrs] = useState();
    const [secs, setSecs] = useState();

    const handler = (e) => {
        console.log('input value: ', e.target.value) 
        setHrs(e.target.value)
    }
    return(
        <div>
            <h3>{title}</h3>
            <div>
                <input type='time' min='1' max='12' onChange={(e) => handler(e)} />
                :
                <input type='time' min='1' max='12'/>
                <div>
                    <div><h5>AM</h5></div>
                    <div><h5>AM</h5></div>
                </div>
            </div>
        </div>
    )
}

export default TimeSelect