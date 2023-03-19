const {Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
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
class Category extends Model{
  static assocciate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports= {CATEGORY_TABLE, CategorySchema, Category}
