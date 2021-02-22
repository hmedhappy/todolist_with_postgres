import React from 'react';

export default function AddTodo() {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <h2>Todo List</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button
            className='btn btn-info my-2 my-sm-0'
            data-toggle='modal'
            data-target='#exampleModal'
            data-whatever='@mdo'>
            Ajouter ToDo
          </button>
          <button
            className='btn btn-secondary my-2 my-sm-0'
            style={{ marginLeft: '1000px', borderRadius: '200px' }}>
            Clear Alla
          </button>
        </div>
      </div>
    </>
  );
}
