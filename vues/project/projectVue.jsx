import { useState } from "react"

import { Column, Modal } from "../../components"
import { randomRGBA } from "../../utils"

import * as Styled from './styled'

const dummy = {
    columnName: 'Column 1',
    columnColor: 'rgba(255,0,0,0.4)',
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
        const newColumn = {
            columnName: columnsInput,
            columnColor: randomRGBA(),
            tasks: []
        }
        setColumns([...columns, newColumn])
        setColumnsInput('')
        setModalOpen(!isModalOpen)
    }

    return (
        <>
            <Styled.Header>
                <h1>{projectName}</h1>
            </Styled.Header>
            <Styled.Container>
                {
                    columns.map(column => {
                        return (<Column key={column.columnName} data={column} />
                        )
                    })
                }
                <Modal isOpen={isModalOpen} HandleClose={() => setModalOpen(!isModalOpen)} ModalTitle="Add column">
                    <Styled.ModalBody>
                        <input
                            type="text"
                            placeholder="Columns Name"
                            value={columnsInput}
                            onChange={(e) => setColumnsInput(e.target.value)}
                        />
                        <button onClick={addColumn}>Add column</button>
                    </Styled.ModalBody>
                </Modal>


            </Styled.Container >
            {!isModalOpen &&
                <Styled.Btn>
                    <img
                        onClick={() => setModalOpen(!isModalOpen)}
                        src={require('../../assets/close.png')}
                        alt="close"
                    />
                </Styled.Btn>
            }
        </>
    )
}