import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';
import {useState, useEffect} from 'react';
import { useColorMode } from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodos(id){
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p='4'>
      <IconButton icon={colorMode === 'light' ? <BsSun /> : <BsMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode}></IconButton>
      <Heading pb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text' >Todo Application</Heading>
      <TodoList todos={todos} deleteTodos={deleteTodos}/>
      <AddTodo addTodo={addTodo}/>
    </VStack>
  );
}

export default App;
