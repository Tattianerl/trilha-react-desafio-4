import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 95%;
    height: 42px;
    color: #FFF;

    border: 1px solid #B0B0B0;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`