import { useState } from "react";
import { 
  Item, 
  Container, 
  TodoList, 
  Input, 
  Title, 
  Button, 
  List, 
  ButtonIcon 
} from "./ListaDeTarefas";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

function ListaDeTarefas() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function buttonClick() {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function startEditing(index) {
    setEditIndex(index);
    setEditValue(tasks[index]);
  }

  function handleEditChange(event) {
    setEditValue(event.target.value);
  }

  function saveEdit(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue('');
  }

  return (
    <>
     
      <Container>
        <TodoList>
          <Input
            placeholder="Digite a tarefa"
            value={inputValue}
            onChange={inputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                buttonClick();
              }
            }}
          />
          <Button onClick={buttonClick}>Adicionar Tarefa</Button>

          <List>
            {tasks.map((item, index) => (
              <Item key={index}>
                {editIndex === index ? (
                  <>
                    <Input
                      value={editValue}
                      onChange={handleEditChange}
                      style={{ flex: 1, marginRight: '10px' }}
                    />
                    <ButtonIcon onClick={() => saveEdit(index)} title="Salvar">
                      <FaSave />
                    </ButtonIcon>
                  </>
                ) : (
                  <>
                    <span style={{ flex: 1, paddingLeft: "10px" }}>{item}</span>
                    <ButtonIcon onClick={() => startEditing(index)} title="Editar">
                      <FaEdit />
                    </ButtonIcon>
                    <ButtonIcon onClick={() => deleteTask(index)} title="Excluir">
                      <FaTrash />
                    </ButtonIcon>
                  </>
                )}
              </Item>
            ))}
          </List>
        </TodoList>
      </Container>
    </>
  );
}

export default ListaDeTarefas;
