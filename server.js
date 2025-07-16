const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Frontend rodando em http://localhost:${PORT}`);
});
