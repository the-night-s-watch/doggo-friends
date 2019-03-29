const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doggoFriends', {
  useNewUrlParser: true
});

const petSchema = new mongoose.Schema({
  pet_id: Number,
  pet_name: String,
  pet_breed: String,
  pet_category: String,
  pet_age: String,
  preview_url: String,
  pet_sex: String,
  shelter_city: String,
  shelter_state: String,
  shelter_name: String
});

const articleSchema = new mongoose.Schema({
  article_id: Number,
  article_title: String,
  article_description: String,
  article_preview_url: String
});

const petsModel = mongoose.model('Pet', petSchema);
const articlesModel = mongoose.model('Article', articleSchema);

module.exports = { petsModel, articlesModel };
