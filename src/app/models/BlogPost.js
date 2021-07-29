

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({

  name: String,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updateCreatedAt:{ type: Date, default: Date.now },
});

// const MyModel = mongoose.model('ModelName', mySchema);
module.exports =mongoose.model('Blogpost',BlogPost)