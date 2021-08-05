// xử lý riêng về tin tức 
// phần path 

const express = require('express');
const router= express.Router();
const siteController= require('../app/controllers/SiteController')

// các tuyến đường của news 
// news/:slug
router.use('/search',siteController.search);
router.use('/',siteController.index);
module.exports =router;