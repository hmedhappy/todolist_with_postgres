import React from 'react';
import { DeleteTodo } from '../services/todoApis';

export default function DoneList({ finished, refresh, setrefresh }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Description</th>
          <th>Date d'ajout</th>
          <th>Date fin</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {finished?.map((todo, index) => (
          <tr key={index}>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td> {todo.posting_date}</td>
            <td> {todo.date_finished}</td>

            <td>
              <button
                onClick={() => (DeleteTodo(todo.todo_id), setrefresh(!refresh))}
                class='btn btn-danger'>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <style jsx>{`
        th {
          padding: 37px;
        }
      `}</style>
    </table>
  );
}
