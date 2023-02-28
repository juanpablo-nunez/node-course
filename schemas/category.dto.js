const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const isBlock= Joi.boolean();

const createCategoryDto = Joi.object({
  name: name.required(),
  image: image.required(),
  isBlock: isBlock.required()
})

const updateCategoryDto = Joi.object({
  name: name,
  image: image,
  isBlock: isBlock
})

const getCategoryDto = Joi.object({
  id: id.required()
});

module.exports = {
  createCategoryDto,
  updateCategoryDto,
  getCategoryDto
}
