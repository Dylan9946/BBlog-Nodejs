

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator'); // tự động thêm slug vào
mongoose.plugin(slug);
const BlogPost = new Schema({

  name :{ type: String, required: true },
  description: {type: String},
  image: { type: String},
  videoId: String,
  slug: { type: String, slug: 'name',unique: true}
  // createdAt: { type: Date, default: Date.now },
  // updateCreatedAt:{ type: Date, default: Date.now },
},{
  timestamps: true, // tự thêm tg 
});

// const MyModel = mongoose.model('ModelName', mySchema);
module.exports =mongoose.model('Blogpost',BlogPost)