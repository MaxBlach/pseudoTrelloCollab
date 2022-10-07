import { useState } from "react"
// import { Modal } from "../../shared/modal/styled"
import { Task } from "./task"
import * as Styled from './styled'

export const Column = ({ data }) => {
    const { columnName, columnColor, tasks } = data

    const [taskList, setTasks] = useState([...tasks])
    const [taskTitleInput, setTaskTitleInput] = useState('')
    const [taskBodyInput, setTaskBodyInput] = useState('')
    const [taskImgs, setTaskImgs] = useState([])

    const [isModalOpen, setModalOpen] = useState(false)

    const addTask = () => {
        const newTask = {
            taskTitle: taskTitleInput,
            taskBody: taskBodyInput,
            taskImgs: 'https://source.unsplash.com/200x200'
        }
        setTasks(newTask)
        setTaskTitleInput('')
        setTaskBodyInput('')
        setTaskImgs([])
    }

    return (
        <Styled.Column Background={columnColor}>
            {/* <Modal isOpen={isModalOpen} HandleClose={() => setModalOpen(!isModalOpen)} ModalTitle="Addtask">
                <Styled.ModalBody>
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskTitleInput}
                        onChange={(e) => setTaskTitleInput(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="What to do..."
                        value={taskBodyInput}
                        onChange={(e) => setTaskBodyInput(e.target.value)}
                    />
                </Styled.ModalBody>
            </Modal> */}
            {
                columnName &&
                <>
                    <Styled.ColumnName>{columnName}</Styled.ColumnName>
                    <Styled.TaskWrapper>
                        {
                            taskList.map(task => {
                                return (
                                    <Task key={task.taskName} task={task} />
                                )
                            })
                        }
                    </Styled.TaskWrapper>
                    {/* {!isModalOpen &&
                        <Styled.Btn>
                            <img
                                onClick={() => setModalOpen(!isModalOpen)}
                                src={require('../../../assets/close.png')}
                                alt="close"
                            />
                        </Styled.Btn>
                    } */}
                </>
            }
        </Styled.Column >
    )
}