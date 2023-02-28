const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler,boomErrorHanddler } = require('./middlewares/error.handler')
const cors = require('cors')
const app = express();
const port = 3000;
app.use(express.json())
const whitelist = ['http://localhost:3000']
const options = {
  origin: (origin, callback) =>{
    if(!whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHanddler);
app.use(errorHandler);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

