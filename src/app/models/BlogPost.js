

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); // tự động thêm slug vào
const mongoose_delete = require('mongoose-delete'); // dùng thư viện dể soft delete
const AutoIncrement = require('mongoose-sequence')(mongoose); // thư viện Autoincrement (tự tăng id)

const BlogPost = new Schema({
  _id : { type: Number},
  name :{ type: String ,unique: true},
  description: {type: String},
  image: { type: String},
  videoId: String,
  slug: { type: String, slug: 'name', unique: true}
  // createdAt: { type: Date, default: Date.now },
  // updateCreatedAt:{ type: Date, default: Date.now },
},{
  _id: false, // k cho thằng mongooes can thiệp vào , mình tự custom field này 
  timestamps: true, // tự thêm tg 
});

// add plugin 
mongoose.plugin(slug);
BlogPost.plugin(AutoIncrement);
BlogPost.plugin(mongoose_delete , {  // soft delete
    overrideMethods: 'all',//phương thức lấy ra những thứ k bị xóa mềm (soft delete) 
    deletedAt: true });// tự thêm field delete at

// const MyModel = mongoose.model('ModelName', mySchema);
module.exports =mongoose.model('Blogpost',BlogPost)