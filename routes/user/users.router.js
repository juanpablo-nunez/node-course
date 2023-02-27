const express = require('express');
const UserService = require('./user.service')
const router = express.Router();
const userSevice = new UserService();

router.post('/', (req, res) => {
  const body = req.body;
  res.json(userSevice.create(body));
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  const product = userSevice.findOne(id);
  res.json(product);
})

router.put('/:id', (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const product = userSevice.update(id,body);
  res.json(product);
})

router.delete('/:id', (req,res) => {
  const {id} = req.params;
  const userDeleted = userSevice.delete(id);
  res.json(userDeleted);

})

module.exports = router;
