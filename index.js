const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json())

routerApi(app);


app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
