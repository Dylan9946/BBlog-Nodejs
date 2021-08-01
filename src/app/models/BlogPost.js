

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({

  name: { type: String, required: true },
  description: String,
  image: String,
  videoId: String,
  // createdAt: { type: Date, default: Date.now },
  // updateCreatedAt:{ type: Date, default: Date.now },
},{
  timestamps: true, // tự thêm tg 
});

// const MyModel = mongoose.model('ModelName', mySchema);
module.exports =mongoose.model('Blogpost',BlogPost)