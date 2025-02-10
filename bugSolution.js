const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));