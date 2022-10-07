import * as Styled from './styled'

export const Modal = ({ children, isOpen, HandleClose, ModalTitle }) => {

    return (
        isOpen &&
        <>
            <Styled.Modal>

                <Styled.ModalHeader>
                    <p>{ModalTitle}</p>
                    <img
                        src={require('../../../assets/close.png')}
                        alt="close"
                        onClick={HandleClose}
                    />
                </Styled.ModalHeader>
                {children}
            </Styled.Modal>
            <Styled.Overlay />
        </>
    )
}