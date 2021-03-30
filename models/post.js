// source: full-stack repo

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('posts', Post)