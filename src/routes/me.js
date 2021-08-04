// xử lý riêng về tin tức 
// phần path 

const express = require('express');
const router= express.Router();

const meController= require('../app/controllers/meController')

// newsController.index
// các tuyến đường của news 
// news/:slug
router.get('/manage/blogs',meController.manageBlogs);
// router.get('/blog/edit/',meController.edit);
router.get('/trash/blogs',meController.trashBlogs);




module.exports =router;