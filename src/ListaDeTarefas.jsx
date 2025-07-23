
import { useState } from "react"
import { Item, Container, TodoList, Input, Button, List } from "./ListaDeTarefas"

function ListaDeTarefas() {

    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')


    function inputChange(event) {
        setInputValue(event.target.value)
    }

    function buttonClick(){
        setTasks([...tasks, inputValue])
    }


    return (
        <Container>
            <TodoList>
                <Input placeholder="Digite a tarefa" onChange={inputChange} />
                <Button onClick={buttonClick} >Adicionar Tarefa</Button>

                <List>
                    {
                        tasks.map ( (item, index) => (
                            <Item key={index}> {item} </Item>
                        ))
                    }
                    
                </List>
            </TodoList>
            
        </Container>
    )
}

export default ListaDeTarefas