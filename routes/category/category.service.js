const faker = require('faker');

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
    return this.categories;
  }
  async findOne(id){
    return this.categories.find(item => item.id === id);
  }
  async update(id, changes){
    const index = this.categories.findIndex(item => item.id ===id)
    if(index === -1){
      throw new Error('Product not found');
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
      throw new Error('Product not found');
    }
    this.categories.splice(index,1);
    return {message: 'Deleted',
            id: id}
  }
}
module.exports = CategoryService;
