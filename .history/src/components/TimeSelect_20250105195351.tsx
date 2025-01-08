import React, { FC, useState } from 'react'

const TimeSelect = () => {
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '.75rem'}}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].map(day => (
                <div style={{borderRadius: '50%', backgroundColor: 'var(--accent-30)', padding: '1rem'}}>
                    <h5 style={{color: 'var(--accent-100)'}}>{day}</h5>
                </div>
            ))}
        </div>
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
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
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 10}}>
            <h4 style={{width:'100%'}}>{title}</h4>
            <input type='number' min='1' max='12' onChange={(e) => hrsHandler(e)} />
            <h5>:</h5>
            <input type='number' min='1' max='12' onChange={(e) => hrsHandler(e)} />
            <div style={{backgroundColor: 'var(--accent-30)', borderRadius: '.5rem', textAlign: 'center'}}>
                <h4 style={{backgroundColor: 'var(--accent-100)', padding: '.5rem 1rem', }}>AM</h4>
                <h4>PM</h4>
            </div>
        </div>
    )
}

export default TimeSelect