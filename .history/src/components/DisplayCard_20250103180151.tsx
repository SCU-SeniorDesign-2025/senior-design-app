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
    }
    .sm_circle{
    }
`
interface Props {
    title: string;
    info: string;
    black_bg: boolean;
    status: boolean;
}
const DisplayCard: FC<Props> = ({title, info, black_bg, status=false}) => {
    return (
        <div className={black_bg?'displayCard accent_avant':'displayCard classic_black'}>
            <style>{divCss}</style>
            <h5 style={{
                position: 'relative', top: '-20px', left: '-15px'
            }}>{title}</h5>
            { status?
                <div > <div> </div></div>
            }
            <h3 style={{
                color: black_bg?'var(--text-100)':'var(--accent-100)'
            }}>{info}</h3>
        </div>
    )
}

export default DisplayCard