import React, { FC, useState } from 'react'


const TimeSelect = () => {
  return (
    <div style={{backgroundColor: 'var(--bg-89)', borderRadius: '.5rem', padding: '3rem 1rem', marginBottom: '-30px'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '.75rem', justifyContent: 'center', marginBottom: '2rem'}}>
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


const inputStyle = {
    borderRadius: '.5rem',
    backgroundColor: 'var(--accent-30)',
    border: 0,
    height: '4rem',
    width: '4rem',
    fontSize: '2rem',
    color: 'var(--text-100)',
    textAlign: 'center'
}
interface Props {
    title: string;
}
const TimeDial: FC<Props> = ({title}) => {
    const [hrs, setHrs] = useState();
    const [secs, setSecs] = useState();
    const [dayTime, setDayTime] = useState(true); //true -> am  then false -> pm

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
            <style>{`
                .am-or-pm{
                    background-color: var(--bg-100); 
                    border-radius: .5rem;
                    padding: .3rem 1rem;
                }
                .selected-am-or-pm{
                    background-color: var(--accent-100);
                    border-radius: .5rem;
                    padding: .3rem 1rem;
                }
            `}</style>
            <h4 style={{width:'100%'}}>{title}</h4>
            <input style={inputStyle} type='number' min='1' max='12' onChange={(e) => hrsHandler(e)} />
            <h5>:</h5>
            <input style={inputStyle} type='number' min='0' max='59' onChange={(e) => hrsHandler(e)} />
            <div style={{backgroundColor: 'var(--accent-30)', padding: '.5rem', borderRadius: '.5rem', textAlign: 'center'}}>
                <h5 className={dayTime?'selected-am-or-pm':'am-or-pm'} style={{marginBottom: '.3rem'}} onClick={() => setDayTime(true)}>AM</h5>
                <h5 className={dayTime?'am-or-pm':'selected-am-or-pm'} onClick={() => setDayTime(false)}>PM</h5>
            </div>
        </div>
    )
}

export default TimeSelect