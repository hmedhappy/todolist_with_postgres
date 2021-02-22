import React from 'react';
import { useState } from 'react';
import { InsertTodo } from '../services/todoApis';

export default function AddModal() {
  const [description, setdescription] = useState('');
  const handleSubmit = async () => {
    await InsertTodo(description);
  };
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Adding ToDo
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
            <form onSubmit={() => handleSubmit()}>
              <div className='form-group'>
                <label htmlFor='message-text' className='col-form-label'>
                  The ToDo is:
                </label>
                <input
                  name='todo'
                  id='todo'
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
                <button type='submit' className='btn btn-info' value='Register'>
                  Save{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
