const productsRouter = require('./product/products.router');
const usersRouter = require('./user/users.router');
const categoriesRouter = require('./category/categories.router');


function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}


module.exports = routerApi;



