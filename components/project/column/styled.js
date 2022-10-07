import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1em;
    margin: 1em 0;
    border-radius: 20px;

    background-color: ${ (props) => props.Background || 'white'};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04),
                0px 0px 2px rgba(0, 0, 0, 0.02);
`
export const ColumnName = styled.p`
    margin-bottom: 0.7em;

    font-size: 2rem;
`

export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 1em;

    height: 100%;
    margin: 0.5em 0 1em 0;

    input{
        font-size: large;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.3em 0.5em;
    }

    textarea{
        font-size: large;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5em 1.4em 3em 0.5em;
        width: 90%;
    }

    button{
        width: 30%;
        border-radius: 10px;
        background-color: #FF8787;
        color: white;
        padding: 0.2em;
    }
`
export const Btn = styled.button`
    align-self: flex-end;

    margin-top: 10px;
    width: 35px;
    height: 35px;
    
    background-color: #256D85;
    border-radius: 35px;
    img{
        filter: invert();
        width: 35px;
        transform: rotate(45deg);

        padding: 0.5em;
    }
`