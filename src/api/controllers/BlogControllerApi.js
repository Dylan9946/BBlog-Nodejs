const BlogPost = require("../../app/models/BlogPost");
const {mongooToObject} = require("../../util/mongoose");







class BlogControllerApi{

    //[GET] /api/blogs
    show(req, res, next){
    //    console.log("connected")
       BlogPost.find()
       .then(blogPost => res.json(blogPost))
       .catch({
           message: "error"
       })
    }

    //[POST] /api/blogs
    // thêm 1 bài viết với [POST] /blog/store
    create(req, res, next) {
        // req.body.image=`https://png.pngtree.com/png-clipart/20200701/original/pngtree
        // -couple-of-bee-in-love-png-image_5390562.jpg`
        const blogPost = new BlogPost(req.body); // tạo model mới
        // res.send('save')
        blogPost
            .save()
            .then(() => res.json(blogPost))
            .catch((err) => next(err));
            console.log(req.body.description)
    }


}






// phần này là function handler (controllers)
// class BlogController {
//     // phương thức show [GET] /blog/:slug
//     show(req, res, next) {
//         //   res.send(req.params.slug); // lấy ra param trên url, lấy slug ra
//         BlogPost.findOne({slug: req.params.slug}) // tìm db có field là slug: {param}
//             .then((blogpost) => {
//             res.render("blogs/show", {blogpost: mongooToObject(blogpost)});
//         }).catch(next);
//     }
//     // [GET] /blog/create
//     create(req, res, next) {
//         res.render("blogs/create");
//     }

//     // thêm 1 bài viết với [POST] /blog/store
//     store(req, res, next) {
//         // req.body.image=`https://png.pngtree.com/png-clipart/20200701/original/pngtree
//         // -couple-of-bee-in-love-png-image_5390562.jpg`
//         const blogPost = new BlogPost(req.body); // tạo model mới
//         // res.send('save')
//         blogPost
//             .save()
//             .then(() => res.redirect("/"))
//             .catch((err) => next(err));
//     }

//     // [GET] /blog/:id/edit đi tới giao diện edit và lấy dử liệu đổ lên
//     edit(req, res, next) {
//         BlogPost
//             .findById(req.params.id)
//             .then(blogpost => res.render("blogs/edit", {blogpost: mongooToObject(blogpost)}))
//             .catch(next);
//     }

//     // [PUT] /blog/:id/ chỉnh sửa post và update vào db
//     update(req, res, next) {
//         BlogPost.updateOne({
//             _id: req.params.id
//         }, req.body) // lấy cái nhận dc từ man hình updtae vào db
//             .then(blogpost => res.redirect("/me/manage/blogs"))
//             .catch((err) => next(err));
//         // res.json(req.body)
//     }

//     //[DELETE] /blog/:id
//     delete(req, res, next) {
//         BlogPost
//             .delete({_id: req.params.id})
//             .then(() => res.redirect("back")) // xóa xong quay lại trang manage
//             .catch(next);
//     }

//     // [PATCH] /blog/restore:id/
//     restore(req, res, next) {
//         BlogPost.restore({_id: req.params.id}) // restore blog
//             .then(() => res.redirect("back")).catch(next);
//     }

//     // xóa mạnh tay
//     forceDelete(req, res, next) {
//         BlogPost.deleteOne({_id: req.params.id}) //xóa vĩnh viễn
//             .then(() => res.redirect("back")).catch(next);
//     }

//     //// [PATCH] /blogs/handel-form-actions
//     handelFormActions(req, res, next) {
//       // res.json(req.body);
//        switch (req.body.action){
//            case 'Xóa vĩnh viễn': 
//                 BlogPost.deleteOne({_id: {$in: req.body.blogItemCheckBox} }) //xóa tất cả blog có id nằm trong list
//                 .then(() => res.redirect("back")).catch(next);
               
//                break;
//             case 'Delete': 
//             BlogPost.delete({_id: {$in: req.body.blogItemCheckBox} }) //xóa tất cả blog có id nằm trong list
//             .then(() => res.redirect("back")).catch(next);
               
//                break;
//            case 'Restore':
//                 BlogPost.restore({_id: {$in: req.body.blogItemCheckBox} }) // restore blog
//                 .then(() => res.redirect("back")).catch(next);
//                 break;
//         default:
//             res.json({message: 'action is invalid'});
//        }

//     }

// }

module.exports = new BlogControllerApi(); // export ra ngoài để thằng khác import