import React, { Component, useState } from 'react'
import { Text, View ,StatusBar} from 'react-native'
import AddToDo from './components/addToDo/AddToDo';
import TodoList from './components/todoList/todoList';

export default function TodoApp() {
  const [todos,setTodos]=useState([
    {
      text:'design app',
      finished:false
    },
    {
      text:'study react native',
      finished:false
    },
    {
      text:'gp task',
      finished:false
    },
    {
      text:'angular ask',
      finished:false
    },
    {
      text:'Reading',
      finished:false
    },
    {
      text:'freelsncing course',
      finished:false
    },
  
  ])

  const addToDo=(obj)=>{
    setTodos([obj,...todos]);
  }

  const toggleCompleted=(todo)=>{
    let updatedTodos = todos.map((i) => {
      if (i === todo) {
        i.finished = !i.finished;
      }
      return i;
    });
    setTodos(updatedTodos);
  }

  return (
    <View style={{height:'100%'}}>
    <StatusBar />
    <AddToDo todoHandler={addToDo}/>
    <TodoList todos={todos} toggleCompleted={toggleCompleted} />
  </View>

  );
}
