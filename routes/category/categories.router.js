const express = require('express');
const CategoryService = require('./category.service')

const router = express.Router();

const categoryService = new CategoryService();
router.get('/', (req, res) => {
  const products = categoryService.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')
})


router.post('/', (req, res) => {
  const body = req.body;
  res.json(categoryService.create(body));
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  const product = categoryService.findOne(id);
  res.json(product);
})

router.put('/:id', (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const category = categoryService.update(id,body);
  res.json(category);
})

router.delete('/:id', (req,res) => {
  const {id} = req.params;
  const productDeleted = categoryService.delete(id);
  res.json(productDeleted);

})

module.exports = router;

