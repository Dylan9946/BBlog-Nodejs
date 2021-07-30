// xử lý riêng về tin tức 
// phần path 

const express = require('express');
const router= express.Router();

const newsController= require('../app/controllers/NewsController')

// newsController.index
// các tuyến đường của news 
// news/:slug
router.get('/:slug',newsController.show);

// news/
router.get('/',newsController.index);
module.exports =router;