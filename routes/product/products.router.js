const express = require('express');
const ProductService = require('./product.service')

const router = express.Router();
const productService = new ProductService();


router.get('/', async(req, res) => {
  const products = await productService.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')
})


router.post('/', async(req, res) => {
  const body = req.body;
  res.json( await productService.create(body));
})

router.get('/:id', async(req,res,next) => {
try{
  const {id} = req.params;
  const product = await productService.findOne(id);
  res.json(product);
}catch(err){
  next(err)
}
})

router.put('/:id', async(req,res) => {
  try{
    const {id} = req.params;
  const body = req.body;
  const product = await productService.update(id,body);
  res.json(product);
  }catch(err){
    res.status(404).json({
      message:err.message
    })
  }
})

router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const productDeleted = await productService.delete(id);
  res.json(productDeleted);

})

module.exports = router;
