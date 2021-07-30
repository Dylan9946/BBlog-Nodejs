

const BlogPost = require('../models/BlogPost');

const {multiMogooseToObject} =require('../../util/mongoose')


// phần này là function handler (controllers)
class SiteController {

    // trang chủ của Site

    // phương thức [GET] /Site
    index(req, res,next){
        // promise
          BlogPost.find({})
          .then(blogPosts => {
            res.render('home',{
                blogPosts: multiMogooseToObject(blogPosts) 
             })
          })
          .catch(err => next())
    }
    // phương thức show 
    search(req, res){
        // res.send(' SEARCH....... !!!!')
        res.render('search')
    }
}

module.exports = new SiteController(); // export ra ngoài để thằng khác import 