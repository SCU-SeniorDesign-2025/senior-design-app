import { FC } from 'react';

const css = `
    .button-custom {
        align-items: center;
        background-color: var(--bg-100);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: .25rem;
        box-shadow: var(--text-100) 0 1px 3px 0;
        box-sizing: border-box;
        color: var(--text-100);
        cursor: pointer;
        display: inline-flex;
        font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(.875rem - 1px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        width: auto;
    }

    .button-custom:hover,
    .button-custom:focus {
        border-color: var(--text-100);
        box-shadow: var(--text-100) 0 4px 12px;
        color: var(--text-100);
    }

    .button-custom:hover {
        transform: translateY(-1px);
    }

    .button-custom:active {
        background-color: var(--bg-100);
        border-color: var(--text-100);
        box-shadow: var(--text-100) 0 2px 4px;
        color: var(--text-100);
        transform: translateY(0);
    }
`

interface Props {
    text: string,
    type: string
}

const Button: FC<Props> = ({text, type}) => {
  return (
    <>
        <style>
            {css}
        </style>
        <button type={type ? 'submit' : 'button'} className="button-custom" role="button">{text}</button>
    </>
  )
}

export default Button;