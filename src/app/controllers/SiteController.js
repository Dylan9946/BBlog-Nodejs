

const BlogPost = require('../models/BlogPost');
// phần này là function handler (controllers)
class SiteController {

    // trang chủ của Site
    // phương thức [GET] /Site
    index(req, res){

        // res.json({
        //     name:'test'
        // })
        BlogPost.find({}, function (err, blogPosts) {
            if(!err){
                res.json(blogPosts);
            } else 
                res.status(400).json({error: "ERROR !!!"})
          });
          
        // res.render("home")
    }
    // phương thức show 
    search(req, res){
        // res.send(' SEARCH....... !!!!')
        res.render('search')
    }
}

module.exports = new SiteController(); // export ra ngoài để thằng khác import 