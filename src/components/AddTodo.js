import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import {useState} from 'react'
import {nanoid} from 'nanoid'

function AddTodo({addTodo}) {
  const toast = useToast();

  function handlesubmit(e){
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id : nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');

  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handlesubmit}>
      <HStack p='30px'>
        <Input variant='filled' placeholder='Input your task here' value={content} onChange={(e)=> setContent(e.target.value)}/>
        <Button colorScheme={'pink'} px="28px" type='submit'>Add Todo</Button>
      </HStack>
    </form>
  )
}

export default AddTodo;