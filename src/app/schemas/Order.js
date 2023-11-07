import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        require: true,
      },
    },
    products: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          require: true,
        },
        price: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Order', OrderSchema)