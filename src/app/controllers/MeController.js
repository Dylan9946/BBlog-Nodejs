

const BlogPost = require('../models/BlogPost');

const {multiMogooseToObject} =require('../../util/mongoose')


// phần này là function handler (controllers)
class meController {

    // trang chủ của Site
    // phương thức [GET] me/manage/blogs
    manageBlogs(req, res,next){
        // promise
          BlogPost.find({})
          .then(blogpost =>  res.render('me/manage-blogs',{
                blogpost: multiMogooseToObject(blogpost) 
             })
          )
          .catch(err => next())
        // res.render('me/manage-Blogs')
    }
}

module.exports = new meController(); // export ra ngoài để thằng khác import 