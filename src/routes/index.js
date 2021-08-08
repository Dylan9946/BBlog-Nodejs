
const newRouter= require('./news')
const siteRouter= require('./site')
const blogsRouter= require('./blogs')
const happyRouter= require('./happy')
const meRouter= require('./me')
const blogApiRouter= require('../api/routes/blogsApi')

function route(app) {

    // NEWS
    app.use("/api/" ,blogApiRouter);
    app.use("/news" ,newRouter);
    app.use("/blogs" ,blogsRouter);
    app.use("/happy" ,happyRouter);  // relax
    app.use("/me" ,meRouter);  
    app.use("/" ,siteRouter);
    // HOME
//     app.get("/", (req, res) => {
//     res.render("home"); //tự đồng chạy vô thư mục views tìm kiếm page home trả về
//   });

  
}
module.exports = route;
