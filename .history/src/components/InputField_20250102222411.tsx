import React, { FC, useEffect, useRef, useState } from 'react'

const css = `
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid var(--accent-20);
        outline: 0;
        font-size: 1.3rem;
        color: var(--accent-100);
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: var(--accent-20);
    }

    .form__field:focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: var(--accent-100);
            font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, var(--accent-100), var(--accent-20));
        border-image-slice: 1;
    }

    /* reset input */
    .form__field{
        &:required,&:invalid { box-shadow:none; }
    }
`
interface Props {
    placeholder: string,
    label: string,
    getInputVal: (a: string, b: string| undefined) => void,
}

const InputField: FC<Props> = ({placeholder, label, getInputVal}) => {
    const [inputVal, setInputVal] = useState<string>('');

    useEffect(()=> {
        console.log('input: ? ', inputVal);
    },[])
    return (
        <>
            <style>
                {css}
            </style>
            <div className="form__group field">
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} className="form__field" placeholder={placeholder} id={placeholder} required />
                <label className="form__label">{label}</label>
            </div>
        </>
    )
}

export default InputField