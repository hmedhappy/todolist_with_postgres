import axios from 'axios';

export const GetTodos = async () => {
  const todos = await axios.get('http://localhost:8000/todos');
  return todos;
};
export const InsertTodo = async (description) => {
  await axios.post(`http://localhost:8000/todos`, {
    description,
  });
};

export const UpdateTodo = async (id, description) => {
  await axios.put(`http://localhost:8000/todos/${id}`, {
    description,
  });
};
export const FinishTodo = async (id, status) => {
  await axios.put(`http://localhost:8000/todos/${id}`, {
    status,
  });
};

export const DeleteTodo = async (id) => {
  await axios.delete(`http://localhost:8000/todos/${id}`);
};
