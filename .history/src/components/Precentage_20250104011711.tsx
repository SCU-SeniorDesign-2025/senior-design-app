import React, { FC } from 'react'

const precentCss = `
    .precent-container{
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        width: fit-content;

    }
    .precent-part{
        height: 2.75rem;
        width: 1.15rem;
        border-radius: .5rem;
        background-color: var(--text-20);
        margin: 0 .2rem;
    }
    .precent-indicator{
        height: 2rem;
        width: 5rem;
        margin-top: .5rem;
        border-radius: .75rem;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--accent-100);
    }
    .on{
        background-color: var(--accent-100) !important;
    }
    .off{
        background-color: var(--text-20) !important;
    }
`
interface Props{
    precent: number; //should be decimal
}
const Precentage: FC<Props> = ({precent}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <style>{precentCss}</style>
        <div className='precent-indicator'><h5>30%</h5></div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <div style={{marginBottom: '.3rem'}} className='precent-container'>
                <div className={precent>=(1/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(2/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(3/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(4/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(5/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(6/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(7/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(8/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(9/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(10/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(11/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(12/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(13/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(14/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(15/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(16/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(17/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(18/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(19/20)?'on precent-part':'off precent-part'}></div>
                <div className={precent>=(20/20)?'on precent-part':'off precent-part'}></div>
            </div>
            <h5 style={{width: '45%', marginLeft: '15px'}}>5m ago</h5>
            <h5 style={{width: '50%', textAlign: 'center'}}>now</h5>
        </div>
    </div>
  )
}

export default Precentage