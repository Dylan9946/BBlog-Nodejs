

const BlogPost = require('../models/BlogPost');

const {multiMogooseToObject} =require('../../util/mongoose')


// phần này là function handler (controllers)
class meController {

    // trang chủ của Site
    // phương thức [GET] me/manage/blogs
    
    manageBlogs(req, res,next){
        // promise
        //  vì là bất đồng bộ nên mange blog k thể nhận deletedCount trc khi nó trả về nên dùng promise.all để hiển thị thùng rác đang chứa bao nhiêu bài post đã xóa
        // 2 tham số đầu vào là blogpost dc lấy ra từ db và số các post đã bị xóa
        // 

        Promise.all([ BlogPost.find({}), BlogPost.countDocumentsDeleted()] ) // 2 tham số đầu vào 
         // nhận lại 2 giá trị trả về của 2 tham số truyền vào trên
        .then(([blogpost,deletedCount]) =>   
               res.render('me/manage-blogs',{
                  blogpost: multiMogooseToObject(blogpost), // ném sang view
                  deletedCount: deletedCount // ném sang view

               })
        
        )
        .catch(()=>{});
      
      //   BlogPost.countDocumentsDeleted() 
      //    .then((deletedCount) => {
      //       console.log(deletedCount);
      //    })
      //    .catch(()=>{});



      //     BlogPost.find({})
      //     .then(blogpost =>  res.render('me/manage-blogs',{
      //           blogpost: multiMogooseToObject(blogpost) 
      //        })
      //     )
      //     .catch(err => next())
          
    }






   // [GET] me/trash/blogs
    trashBlogs(eq, res,next){
      BlogPost.findDeleted({}) // tìm blog đã xóa để vào giao diện
      .then(blogpost =>  res.render('me/trash-blogs',{
            blogpost: multiMogooseToObject(blogpost) 
         })
      )
      .catch(err => next())

    }
}

module.exports = new meController(); // export ra ngoài để thằng khác import 