const BlogPost = require("../models/BlogPost");

const { mongooToObject } = require("../../util/mongoose");

// phần này là function handler (controllers)
class BlogController {
  // phương thức show
  // [GET] /blog/:slug
  show(req, res, next) {
    //   res.send(req.params.slug); // lấy ra param trên url, lấy slug ra
    BlogPost.findOne({ slug: req.params.slug }) // tìm db có field là slug: {param}
      .then((blogpost) => {
        res.render("blogs/show", {
          blogpost: mongooToObject(blogpost),
        });
      })
      .catch(next);
  }
   // [GET] /blog/create
  create(req, res, next) {
    res.render('blogs/create')
  };
  // [POST] /blog/store
  store(req, res,next) {
    // req.body.image=`https://png.pngtree.com/png-clipart/20200701/original/pngtree-couple-of-bee-in-love-png-image_5390562.jpg`
    const blogPost = new BlogPost(req.body); // tạo model mới
    // res.send('save')
    blogPost.save()
    .then(()=>res.redirect('/'))
    .catch(err => next(err));
    
  }
}

module.exports = new BlogController(); // export ra ngoài để thằng khác import
