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
        background-color: var(--accent-100);
    }
`
interface Props {
    title: string;
    info: string;
    black_bg: boolean;
}
const DisplayCard: FC<Props> = ({title, info, black_bg}) => {
    return (
        <div className={black_bg? 'displayCard classic_black': 'displayCard accent_avant'}>
            <style>{divCss}</style>
            <h3 style={{position: 'relative', top: 0, left: 0}}>{title}</h3>
            <h5 style={{color: black_bg?'var(--text-100)':'var(--accent-100)'}}>{info}</h5>
        </div>
    )
}

export default DisplayCard