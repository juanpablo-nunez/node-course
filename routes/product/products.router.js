const express = require('express');
const ProductService = require('./product.service')

const router = express.Router();
const productService = new ProductService();
router.get('/', (req, res) => {
  const products = productService.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')
})


router.post('/', (req, res) => {
  const body = req.body;
  res.json(productService.create(body));
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  const product = productService.findOne(id);
  res.json(product);
})

router.put('/:id', (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const product = productService.update(id,body);
  res.json(product);
})

router.delete('/:id', (req,res) => {
  const {id} = req.params;
  const productDeleted = productService.delete(id);
  res.json(productDeleted);

})

module.exports = router;
