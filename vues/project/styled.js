import styled from "styled-components";

export const Header = styled.div`
    background-color: #FFF5E4;
    padding: 0.6em;
`

export const Container = styled.div`
    padding: 0 0.5em;
    flex-shrink: 1;
    height: 100%;
`
export const Btn = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;

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

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 1em;
    
    height: 100%;

    button{
        width: 30%;
        border-radius: 10px;
        background-color: rgb(255,0,0);
        color: white;
        padding: 0.2em;
    }

    input{
        font-size: large;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.3em 0.5em;
    }
`