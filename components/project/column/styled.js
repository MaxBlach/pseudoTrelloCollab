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
`