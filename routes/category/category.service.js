const faker = require('faker');
const boom = require('@hapi/boom');
const {models} = require('./../../libs/sequelize');

class CategoryService {
  constructor(){
    this. categories= [];
    this.generate();
  }
  async generate(){
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name:  faker.commerce.productName(),
        isBlock: faker.datatype.boolean()
      });
    }
  }
  async create(data){
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newCategory);
    return newCategory;
  }
  async find(){
    const rta = await models.Category.findAll();
    return rta;
  }
  async findOne(id){
    const category = this.categories.find(item => item.id === id);
    if(!category){
      throw boom.notFound('category not found');
    }
    if(category.isBlock){
      throw boom.conflict('category is block');
    }
    return category;
  }
  async update(id, changes){
    const index = this.categories.findIndex(item => item.id ===id)
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    const product = this.categories[index]
    this.categories[index] = {
      ...product,
      ...changes
    }
    return this.categories[index];
  }
  async delete(id){
    const index = this.categories.findIndex(item => item.id ===id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.categories.splice(index,1);
    return {message: 'Deleted',
            id: id}
  }
}
module.exports = CategoryService;
