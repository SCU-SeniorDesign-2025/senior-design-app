import React, { FC, useState } from 'react'

const TimeSelect = () => {
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].map(day => (
                <div style={{borderRadius: '50%', backgroundColor: 'var(--accent-30)', color: 'var(--accent-100)'}}>
                    <h5>{day}</h5>
                </div>
            ))}
        </div>
        <div>
            <TimeDial title='Start Time'/>
            <TimeDial title='End Time'/>
        </div>
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
            <input type='time' min='1' max='12' onChange={(e) => hrsHandler(e)} />
        </div>
    )
}

export default TimeSelect