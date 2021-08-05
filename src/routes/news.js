// xử lý riêng về tin tức 
// phần path 
//=============================
const express = require('express');
const router= express.Router();
const newsController= require('../app/controllers/NewsController')
//============================
// xử lý các tuyến đường con của news 
// news/:slug
// :slug là 1 params
router.get('/:slug',newsController.show);

//[GET] news/
router.get('/',newsController.index);

module.exports =router;