


// phần này là function handler (controllers)
class SiteController {

    // trang chủ của Site
    // phương thức [GET] /Site
    index(req, res){
        res.render("home")
    }
    // phương thức show 
    search(req, res){
        res.send(' SEARCH....... !!!!')
    }
}

module.exports = new SiteController(); // export ra ngoài để thằng khác import 