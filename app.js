const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send('<h1>DataVision App - Desplegado con CodeDeploy</h1><p>¡Funciona correctamente!</p>');
});
 
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});