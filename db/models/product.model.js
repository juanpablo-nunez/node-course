const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type: DataTypes.STRING
  },
  price:{
    allowNull:false,
    type: DataTypes.NUMBER
  },
  image:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  isBlock:{
    allowNull:false,
    field:'is_block',
    type: DataTypes.BOOLEAN,
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.STRING,
    field:'create_at',
    defaultValue: Sequelize.NOW
  }
}
class Product extends Model{
  static assocciate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports= {PRODUCT_TABLE, ProductSchema, Product}
