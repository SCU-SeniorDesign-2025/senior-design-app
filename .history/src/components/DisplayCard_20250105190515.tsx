import React, { FC } from 'react'


const divCss = ` 
    .displayCard{
        border-radius: .5rem;
        color: var(--text-100);
        padding: 2rem;
    }
    .classic_black{
        background-color: var(--bg-89);
    }
    .accent_avant{
        background-color: var(--accent-30);
    }
    .big_circle{
        background-color: var(--accent-30);
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sm_circle{
        background-color: var(--accent-50);
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }

    .blink_sm_class{
        animation: blink_sm 3s ease-out infinite;
    }
    @keyframes blink_sm{

        45% {
            background-color: rgba(215, 38, 56, .3);
        }
        60% {
            background-color: rgba(215, 38, 56, 1);
        }
        80% {
            background-color: rgba(215, 38, 56, 1);
        }
    }

    .blink_big_class{
        animation: blink_big 3s ease-out infinite;
    }
    @keyframes blink_big{
        25% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(1);
        }
    }
`
interface Props {
    title?: string;
    info: string;
    black_bg: boolean;
    status: boolean;
    fn?: () => void;
    fullWidth?: boolean;
}
const DisplayCard: FC<Props> = ({title='', info, black_bg, status=true, fn, fullWidth=false}) => {
    return (
        <div onClick={fn} className={black_bg?'displayCard accent_avant':'displayCard classic_black'} style={fullWidth?{display: 'flex', flexDirection: 'column', width: '100%'}:{display: 'flex', flexDirection: 'column'}}>
            <style>{divCss}</style>
            <h5 style={{
                position: 'relative', top: '-20px', left: '-15px'
            }}>{title}</h5>
            { status?
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, flexGrow: 0}}>
                    <div className='big_circle blink_big_class'></div>
                    <div style={{transform: 'translateX(-1.56rem)'}}className='sm_circle blink_sm_class'></div>
                    <h4 style={{
                        color: black_bg?'var(--text-100)':'var(--accent-100)'
                    }}>{info}</h4>
                </div>
                :
                <h4 style={{
                    color: black_bg?'var(--text-100)':'var(--accent-100)'
                }}>{info}</h4>
            }
        </div>
    )
}

export default DisplayCard