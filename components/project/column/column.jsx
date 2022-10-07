import { Task } from "./task"
import * as Styled from './styled'

export const Column = ({ data }) => {
    const { columnName, columnColor, tasks } = data
    return (
        <Styled.Column Background={columnColor}>
            {
                columnName &&
                <>
                    <Styled.ColumnName>{columnName}</Styled.ColumnName>
                    <Styled.TaskWrapper>
                        {
                            tasks.map(task => {
                                return (
                                    <Task key={task.taskName} task={task} />
                                )
                            })
                        }
                    </Styled.TaskWrapper>
                </>
            }
        </Styled.Column >
    )
}