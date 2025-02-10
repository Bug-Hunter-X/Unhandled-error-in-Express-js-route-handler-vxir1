const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  const user = users.find(user => user.id === userId);
  if (!user) {
    //No response sent for user not found
    console.log('User not found');
  } else {
    res.json(user);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));