import * as Styled from './styled'

export const Task = ({ task }) => {
    const { taskName, taskBody, taskImgs } = task
    return (
        <Styled.Task>
            <h3>{taskName}</h3>
            <p>{taskBody}</p>
            <Styled.ImageWrapper>
                {
                    taskImgs && taskImgs.map(img => {
                        return (
                            <img src={img} alt="AltImage" key={img} />
                        )
                    })
                }
            </Styled.ImageWrapper>

        </Styled.Task>
    )
}