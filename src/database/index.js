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
      'postgres://xxtyagyo:cdmw-_lKXZhiG6zJVSUsfGdG6CwMeylY@silly.db.elephantsql.com/xxtyagyo',
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
