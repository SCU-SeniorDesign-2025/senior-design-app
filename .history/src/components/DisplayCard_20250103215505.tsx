import React, { FC } from 'react'


const divCss = ` 
    .displayCard{
        border-radius: 1rem;
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
        animation: blink_sm 2s infinite;
    }
    @keyframes blink_sm{
        25% {
            background-color: rgba(215, 38, 56, .8);
        }
        50% {
            background-color: rgba(215, 38, 56, .3);
        }
        75% {
            background-color: rgba(215, 38, 56, .8);
        }
    }

    .blink_big_class{
        animation: blink_big 2s infinite;
    }
    @keyframes blink_big{
        25% {
            height: 20px;
            width: 20px;
        }
        50% {
            height: 10px;
            width: 10px;
        }
        75% {
            height: 20px;
            width: 20px;
        }
    }
`
interface Props {
    title: string;
    info: string;
    black_bg: boolean;
    status: boolean;
}
const DisplayCard: FC<Props> = ({title, info, black_bg, status=true}) => {
    return (
        <div className={black_bg?'displayCard accent_avant':'displayCard classic_black'}>
            <style>{divCss}</style>
            <h5 style={{
                position: 'relative', top: '-20px', left: '-15px'
            }}>{title}</h5>
            { status?
                <>
                    <div className='big_circle '><div className='sm_circle blink_sm_class'></div></div>
                    <h3 style={{
                        color: black_bg?'var(--text-100)':'var(--accent-100)'
                    }}>{info}</h3>
                </>
                :
                <h3 style={{
                    color: black_bg?'var(--text-100)':'var(--accent-100)'
                }}>{info}</h3>
            }
        </div>
    )
}

export default DisplayCard