

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); // tự động thêm slug vào
const mongoose_delete = require('mongoose-delete'); // dùng thư viện dể soft delete


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

// add plugin 
mongoose.plugin(slug);
BlogPost.plugin(mongoose_delete , {  // soft delete
   overrideMethods: 'all',//phương thức lấy ra những thứ k bị xóa mềm (soft delete) 
  deleteAt: true });// tự thêm field delete at

// const MyModel = mongoose.model('ModelName', mySchema);
module.exports =mongoose.model('Blogpost',BlogPost)