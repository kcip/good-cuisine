const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    videoURL:{ type: String, required: false},
    ingredients: [{ type: String, required: true }],
    equipment:[{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    cuisine: { type: String, required: true },
    cooktime: { type: String, required: true },
    difficulty: { type: String, required: true },
    diet: [{ type: String, required: false }],
    cookingMethod:[{ type: String, required: false }],
    course:{ type: String, required: true },
    serving:{ type: String, required: true },
    keyword:[{ type: String, required: false }],
    saved: false
  },
  { timestamps: true }
)

module.exports = mongoose.model('recipes', Recipe)

