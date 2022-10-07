import { Column } from "../../components"
import * as Styled from './styled'
import { useState } from "react"
import { Modal } from "../../components/shared/modal"
const dummy = {
    columnName: 'Column 1',
    columnColor: '#f7cdcb',
    tasks: [
        {
            taskName: 'Task 1',
            taskBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lobortis ex a iaculis.',
            taskImgs: [
                'https://source.unsplash.com/200x200',
            ]
        },
    ]
}

export const ProjectVue = () => {
    const [columns, setColumns] = useState([dummy])
    const [columnsInput, setColumnsInput] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
    const projectName = 'Project 1'

    const addColumn = () => {
        console.log(columnsInput)
        const newColumn = {
            columnName: columnsInput,
            columnColor: '#f7cdcb',
            tasks: []
        }
        setColumns([...columns, newColumn])
        setColumnsInput('')
        setModalOpen(!isModalOpen)
    }

    return (
        <Styled.Container>
            <h1>{projectName}</h1>
            {
                columns.map(column => {
                    return (<Column key={column.columnName} data={column} />
                    )
                })
            }
            <Modal isOpen={isModalOpen} HandleClose={()=>setModalOpen(!isModalOpen)} ModalTitle="Add column">
                <input
                    type="text"
                    placeholder="Columns Name"
                    value={columnsInput}
                    onChange={(e) => setColumnsInput(e.target.value)}
                />
                <button onClick={addColumn}>Add column</button>
            </Modal>
            <Styled.addBtn onClick={()=>setModalOpen(!isModalOpen)}>Add</Styled.addBtn>
        </Styled.Container >
    )
}