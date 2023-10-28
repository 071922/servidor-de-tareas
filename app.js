const express = require('express');
const app = express();
const port = 3000;

const tasks = [
    { id: 1, description: 'Mercar', completed: false },
    { id: 2, description: 'Estudiar', completed: true },
    { id: 3, description: 'Realizar los entregables', completed: true },
  ];

  app.get('/tasks', (req, res) => {
  res.json(tasks);
  console.log('tareas ok')
});

app.listen(port, () => {
  console.log(`Server listening in ${port}`);
})
