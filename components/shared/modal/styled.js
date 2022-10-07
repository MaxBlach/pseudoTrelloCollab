import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;

    top: 50%;
    right: 50%;

    z-index: 2;
    width: 80%;
    height: auto;
    min-height: 20vh;

    border-radius: 10px;

    transform: translate(50%,-50%);
    background: white;


    `
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    width: 100vw;
    height: 100%;

    background: black;
    opacity: 0.45;
`
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding:0.5em;

    color: white;
    background: black;

    border-radius:  10px 10px 0 0;

    img{
        width: 20px;
        filter: invert();
        opacity: 0.4;
        cursor: pointer;
    }
`