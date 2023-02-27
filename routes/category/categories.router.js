const express = require('express');
const CategoryService = require('./category.service')

const router = express.Router();

const categoryService = new CategoryService();
router.get('/', async(req, res) => {
  const products = await categoryService.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')
})


router.post('/', async(req, res) => {
  const body = req.body;
  res.json(await categoryService.create(body));
})

router.get('/:id', async(req,res) => {
  const {id} = req.params;
  const product = await categoryService.findOne(id);
  res.json(product);
})

router.put('/:id', async(req,res) => {
  const {id} = req.params;
  const body = req.body;
  const category = await categoryService.update(id,body);
  res.json(category);
})

router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const productDeleted = await categoryService.delete(id);
  res.json(productDeleted);

})

module.exports = router;

