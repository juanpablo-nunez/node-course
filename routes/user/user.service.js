const faker = require('faker');

class UserService{
  constructor(){
    this.users = [];
    this.generate();
  }
  async generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name:  faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }
  async create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }
  async find(){
    return this.users;
  }
  async findOne(id){
    return this.users.find(item => item.id === id);
  }
  async update(id, changes){
    const index = this.users.findIndex(item => item.id ===id)
    if(index === -1){
      throw new Error('Product not found');
    }
    const product = this.users[index]
    this.users[index] = {
      ...product,
      ...changes
    }
    return this.users[index];
  }
  async delete(id){
    const index = this.users.findIndex(item => item.id ===id);
    if(index === -1){
      throw new Error('Product not found');
    }
    this.users.splice(index,1);
    return {message: 'Deleted',
            id: id}
  }
}

module.exports = UserService;
