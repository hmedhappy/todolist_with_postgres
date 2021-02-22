import React from 'react';
import { DeleteTodo, FinishTodo } from '../services/todoApis';

export default function Todos({
  refresh,
  setrefresh,
  not_finished,
  setclickedTodo,
}) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>id</th>
          <th>Description</th>
          <th>Date d'ajout</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {not_finished?.map((todo, index) => (
          <tr key={index}>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td> {todo.posting_date}</td>
            <td>
              {' '}
              <button
                onClick={() => (
                  FinishTodo(todo.todo_id, 'finished', new Date()),
                  setrefresh(!refresh)
                )}
                className='btn btn-success'>
                Terminer
              </button>
              <button
                onClick={() => setclickedTodo(todo)}
                type='button'
                className='btn btn-warning mx-3'
                data-toggle='modal'
                data-target='#exampleModall'
                data-whatever='@mdo'>
                Modifier{' '}
              </button>
              <button
                onClick={() => (DeleteTodo(todo.todo_id), setrefresh(!refresh))}
                className='btn btn-danger'>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
