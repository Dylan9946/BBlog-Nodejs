

const newRouter= require('./news')
const siteRouter= require('./site')

function route(app) {

    // NEWS
    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });
    app.use("/news" ,newRouter);
    app.use("/" ,siteRouter);
    // HOME
//     app.get("/", (req, res) => {
//     res.render("home"); //tự đồng chạy vô thư mục views tìm kiếm page home trả về
//   });

  
}
module.exports = route;
