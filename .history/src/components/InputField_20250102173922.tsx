import React from 'react'
import styled from 'styled-components';

const css = `
    $primary: #11998e;
    $secondary: #38ef7d;
    $white: #fff;
    $gray: #9b9b9b;
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
        border-bottom: 2px solid $gray;
        outline: 0;
        font-size: 1.3rem;
        color: $white;
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
        color: $gray;
    }

    .form__field:focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $primary;
            font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, $primary,$secondary);
        border-image-slice: 1;
    }

    /* reset input */
    .form__field{
        &:required,&:invalid { box-shadow:none; }
    }
`

const InputField = () => {
  return (
    <>
        <style>
            {css}
        </style>
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
            <label className="form__label">Name</label>
        </div>
    </>
  )
}

export default InputField