const faker = require('faker');
const boom = require('@hapi/boom');
const {models} = require('./../../libs/sequelize');
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
        isBlock : faker .datatype.boolean()
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
    const rta = await models.User.findAll();
    return rta;
  }
  async findOne(id){
    const user = this.users.find(item => item.id === id);
    if(!user){
      throw boom.notFound('user not found');
    }
    if(user.isBlock){
      throw boom.conflict('user is block');
    }
    return user;
  }
  async update(id, changes){
    const index = this.users.findIndex(item => item.id ===id)
    if(index === -1){
      throw boom.conflict('user not found');
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
      throw boom.conflict('user not found');
    }
    this.users.splice(index,1);
    return {message: 'Deleted',
            id: id}
  }
}

module.exports = UserService;
