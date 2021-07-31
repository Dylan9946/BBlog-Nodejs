

const BlogPost = require('../models/BlogPost');

const {mongooToObject} =require('../../util/mongoose')


// phần này là function handler (controllers)
class BlogController {

    // phương thức show 
    // [GET] /blog/:slug
    show(req, res,next){
     //   res.send(req.params.slug); // lấy ra param trên url, lấy slug ra 
     BlogPost.findOne({slug: req.params.slug}) // tìm db có field là slug: {param}
     .then(blogpost => {
         res.render('blogs/show',{ 
             blogpost : mongooToObject(blogpost) });
     })
     .catch(next)
    }
}

module.exports = new BlogController(); // export ra ngoài để thằng khác import 