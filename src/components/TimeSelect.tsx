import React, { FC, useState } from 'react'


const TimeSelect = () => {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleSelect = (d: string) => {
        if(!selectedDays.includes(d)){
            setSelectedDays(s => [...s, d]);
        }else{
            setSelectedDays(selectedDays.filter(day => day !== d));
        }
        console.log('selected days: ', selectedDays);
    }
  return (
    <div style={{backgroundColor: 'var(--bg-89)', borderRadius: '.5rem', padding: '3rem 1rem', marginTop: '2rem', marginBottom: '-3rem'}}>
        <style>{`
            .sel_day{
                border: 2px solid var(--accent-100);
            }
            .day{
                border-radius: 50%; 
                background-color: var(--accent-30);
                padding: 1rem
            }
        `}</style>
        <div style={{display: 'flex', flexDirection: 'row', gap: '.75rem', justifyContent: 'center', marginBottom: '2rem'}}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'].map(day => (
                <div 
                key={day}
                className={selectedDays.includes(day)?'sel_day day':'day'}
                onClick={() => handleSelect(day)}>
                    <h5 style={{color: 'var(--accent-100)'}}>{day}</h5>
                </div>
            ))}
        </div>
        <div style={{display: 'flex', flexFlow: 'row nowrap', gap: 20}}>
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
    const [hrs, setHrs] = useState<number>(0);
    const [secs, setSecs] = useState<number>(0);
    const [dayTime, setDayTime] = useState(true); //true -> am  then false -> pm

    const hrsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('input value: ', e.target.value) 
        if(Number(e.target.value) < 1){
            setHrs(1);
        }else if(Number(e.target.value) > 12){
            setHrs(12);
        }else{
            setHrs(Number(e.target.value));
        }
    }
    const secsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('input value: ', e.target.value) 
        if(Number(e.target.value) < 0){
            setSecs(0);
        }else if(Number(e.target.value) > 59){
            setSecs(59);
        }else{
            setSecs(Number(e.target.value));
        }
    }
    return(
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 10,
            backgroundColor: 'var(--bg-88)', padding: '1rem', borderRadius: '.5rem'
        }}>
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
                .inputTime{
                    border-radius: .5rem;
                    background-color: var(--accent-30);
                    border: 0;
                    height: 4rem;
                    width: 4rem;
                    font-size: 2rem;
                    color: var(--text-100);
                    text-align: center;
                }
            `}</style>
            <h4 style={{width:'100%'}}>{title}</h4>
            <input className='inputTime' type='number' min='1' max='12' value={hrs} onChange={(e) => hrsHandler(e)} />
            <h5>:</h5>
            <input className='inputTime' type='number' min='0' max='59' value={secs} onChange={(e) => secsHandler(e)} />
            <div style={{backgroundColor: 'var(--accent-30)', padding: '.5rem', borderRadius: '.5rem', textAlign: 'center'}}>
                <h5 className={dayTime?'selected-am-or-pm':'am-or-pm'} style={{marginBottom: '.3rem'}} onClick={() => setDayTime(true)}>AM</h5>
                <h5 className={dayTime?'am-or-pm':'selected-am-or-pm'} onClick={() => setDayTime(false)}>PM</h5>
            </div>
        </div>
    )
}

export default TimeSelect