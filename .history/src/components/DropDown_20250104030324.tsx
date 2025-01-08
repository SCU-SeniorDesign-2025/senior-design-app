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
        border-bottom: 2px solid var(--accent-100);
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
        color: var(--accent-100);
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
        border-image: linear-gradient(to right, var(--accent-100), var(--accent-100));
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
        getInputVal(label, inputVal);
    },[inputVal])
    
    return (
        <>
            <style>
                {css}
            </style>
            {/* <div className="form__group field">
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} className="form__field" placeholder={placeholder} id={placeholder} required />
                <label className="form__label">{label}</label>
            </div> */}
            <div className="form__group field">
                <select>
                    <option value='School of Engineering'>School of Engineering</option>
                    <option value='Leavey School of Business'>Leavey School of Business</option>
                    <option value='College or Arts and Sciences'>College or Arts and Sciences</option>
                    <option value='School of Law'>School of Law</option>
                    <option value='School of Education and Counseling Psychology'>School of Education and Counseling Psychology</option>
                    <option value='Jesuit School of Theology'>Jesuit School of Theology</option>
                </select>
                <label className="form__label">{label}</label>
            </div>
        </>
    )
}

export default InputField