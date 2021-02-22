const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const pg = require('./config/dbConfig');
const pool = require('./config/dbConfig');

app.use(cors());
app.use(express.json());

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      `INSERT INTO todo (description,status) VALUES('${description}','not_finished')`
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * from todo ;');
    res.json(todos.rows);
    console.log('cii bon');
  } catch (error) {
    console.log(error.message);
  }
});

app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;
  description
    ? await pool.query(`UPDATE todo SET description = $1 WHERE todo_id = $2`, [
        description,
        id,
      ])
    : await pool.query(`UPDATE todo SET status = $1 WHERE todo_id = $2`, [
        status,
        id,
      ]);
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const DeleteTodo = await pool.query(`DELETE FROM todo WHERE todo_id = ${id}`);
  res.json(DeleteTodo);
});

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
