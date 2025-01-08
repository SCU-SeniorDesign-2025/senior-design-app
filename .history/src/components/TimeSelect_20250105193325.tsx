import React, { FC, useState } from 'react'

const TimeSelect = () => {
  return (
    <div>
        <div></div>
        <div></div>
    </div>
  )
}
interface Props {
    title: string;
}
const TimeDial: FC<Props> = ({title}) => {
    const [hrs, setHrs] = useState();
    const [secs, setSecs] = useState();

    const hrsHandler = (e) => {
        console.log('input value: ', e.target.value) 
        setHrs(e.target.value);
    }
    const secsHandler = (e) => {
        console.log('input value: ', e.target.value) 
        setHrs(e.target.value);
    }
    return(
        <div>
            <h3>{title}</h3>
            <div>
                <input type='time' min='1' max='12' onChange={(e) => hrsHandler(e)} />
                :
                <input type='time' min='1' max='12' onChange={(e) => secsHandler(e)} />
                <div>
                    <div><h5>AM</h5></div>
                    <div><h5>AM</h5></div>
                </div>
            </div>
        </div>
    )
}

export default TimeSelect