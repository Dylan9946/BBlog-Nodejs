


// phần này là function handler (controllers)
class HappyController {

    // trang chủ của news
    // phương thức [GET] /news
    index(req, res){
        res.render('happy')
    }
    // phương thức show 
    show(req, res){
        res.send('NEWS DETAILS !!!!')
    }
}

module.exports =new HappyController(); // export ra ngoài để thằng khác import 