import Sequelize from 'sequelize'
// import configDatabase from '../config/database'
import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'
import mongoose from 'mongoose'

const models = [User, Product, Category]
class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:Dd2Gd3G5EGe4aFbgGE4DB4BCDg12fA3g@roundhouse.proxy.rlwy.net:20866/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:Gg43BBfB-CcB23eCHCAHb2hbhEbhbE1-@viaduct.proxy.rlwy.net:56853',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
  }
}

export default new Database()
