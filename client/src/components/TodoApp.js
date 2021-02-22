import React, { useState } from 'react';
import TodoList from './app/TodoList';
import AddTodo from './app/AddTodo';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';

export default function TodoApp() {
  const [clickedTodo, setclickedTodo] = useState();
  return (
    <div>
      <AddTodo />
      <TodoList setclickedTodo={setclickedTodo} />
      <EditModal clickedTodo={clickedTodo} />
      <AddModal />
    </div>
  );
}
