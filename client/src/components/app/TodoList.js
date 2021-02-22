import React, { useState, useEffect } from 'react';
import { GetTodos } from '../services/todoApis';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneList from './DoneList';
import Todos from './Todos';

export default function TodoList({ setclickedTodo }) {
  const [todos, settodos] = useState();
  const [refresh, setrefresh] = useState(true);

  const not_finished = todos?.filter((todo) => todo.status == 'not_finished');
  const finished = todos?.filter((todo) => todo.status == 'finished');
  useEffect(async () => {
    const todosfromdb = await GetTodos();

    settodos(todosfromdb.data);
  }, [refresh]);

  return (
    <>
      {todos ? (
        <div>
          <div className='row'>
            <div
              className='col'
              style={{ display: 'flex', justifyContent: 'center' }}>
              {not_finished.length >= 1 ? (
                <Todos
                  not_finished={not_finished}
                  setrefresh={setrefresh}
                  refresh={refresh}
                  setclickedTodo={setclickedTodo}
                />
              ) : (
                <div class='row' class='alert alert-warning'>
                  Aucun ToDo Disponible{' '}
                </div>
              )}
            </div>
          </div>
          <hr />
          <div class='row'></div>
          <div class='row'>
            <div
              class='col'
              style={{ display: 'flex', justifyContent: 'center' }}>
              {finished?.length >= 1 ? (
                <DoneList
                  finished={finished}
                  setrefresh={setrefresh}
                  refresh={refresh}
                />
              ) : (
                <div class='row' class='alert alert-warning'>
                  Aucun Done-ToDo Disponible{' '}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
