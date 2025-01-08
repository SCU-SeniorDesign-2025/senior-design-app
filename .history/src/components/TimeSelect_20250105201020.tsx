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
const inputStyle = {
    borderRadius: '.5rem',
    backgroundColor: 'var(--accent-30)',
    border: 0,
    height: '4rem',
    width: '4rem',
    fontSize: '2rem',
    color: 'var(--text-100)'
}
const TimeDial: FC<Props> = ({title}) => {
    const [hrs, setHrs] = useState();
    const [secs, setSecs] = useState();
    const [dayTime, setDayTime] = useState(false);

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
            <input style={inputStyle} type='number' min='1' max='12' onChange={(e) => hrsHandler(e)} />
            <h5>:</h5>
            <input style={inputStyle} type='number' min='0' max='59' onChange={(e) => hrsHandler(e)} />
            <div style={{backgroundColor: 'var(--accent-30)', padding: '.5rem', borderRadius: '.5rem', textAlign: 'center'}}>
                <h6 style={{backgroundColor: dayTime?'var(--accent-100)':'var(--bg-100)', borderRadius: '.5rem', padding: '.3rem .5rem', marginBottom: '.4rem'}} onClick={() => setDayTime(false)}>AM</h6>
                <h6 style={{backgroundColor: dayTime?'var(--accent-100)':'var(--bg-100)', borderRadius: '.5rem', padding: '.3rem .5rem', }} onClick={() => setDayTime(true)}>PM</h6>
            </div>
        </div>
    )
}

export default TimeSelect