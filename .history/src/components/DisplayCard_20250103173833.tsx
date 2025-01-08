import React, { FC } from 'react'


const divCss = ` 
    .displayCard{
        border-radius: 1rem;
        background: 
    }
    .classic_black{
        background-color: var(--bg-89);
        color: var(--text-100);
    }
    .accent_avant{
        background-color: var(--accent-100);
        color: var(--text-100);
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
            <h3>{title}</h3>
            <h5>{info}</h5>
        </div>
    )
}

export default DisplayCard