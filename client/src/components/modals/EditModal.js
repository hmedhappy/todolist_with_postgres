import React, { useEffect, useState } from 'react';
import { UpdateTodo } from '../services/todoApis';

export default function EditModal({ clickedTodo }) {
  const [description, setdescription] = useState('');

  useEffect(async () => {
    await setdescription(clickedTodo?.description);
  }, [clickedTodo]);

  const handleSubmit = async (id) => {
    await UpdateTodo(id?.todo_id, description);
  };

  return (
    <div
      className='modal fade'
      id='exampleModall'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Change ToDo
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form onSubmit={() => handleSubmit(clickedTodo)}>
              <div className='form-group'>
                <label htmlFor='message-text' className='col-form-label'>
                  The ToDo is:
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>

              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Close
                </button>
                <button className='btn btn-primary' type='submit'>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
