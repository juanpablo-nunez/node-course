const express = require('express');
const UserService = require('./user.service')
const router = express.Router();
const userSevice = new UserService();

router.post('/', async(req, res) => {
  const body = req.body;
  res.json(await userSevice.create(body));
})

router.get('/:id', async(req,res) => {
  const {id} = req.params;
  const product = await userSevice.findOne(id);
  res.json(product);
})

router.put('/:id', async(req,res) => {
  const {id} = req.params;
  const body = req.body;
  const product = await userSevice.update(id,body);
  res.json(product);
})

router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const userDeleted = await userSevice.delete(id);
  res.json(userDeleted);

})

module.exports = router;
