// xử lý riêng về tin tức phần path

const express = require('express');
const router = express.Router();

const blogControllerApi = require('../controllers/BlogControllerApi');



 router.get('/blogs', blogControllerApi.show);
// newsController.index các tuyến đường của news news/:slug
// router.get('/create', blogController.create);
// router.post('/store', blogController.store);
// router.post('/handel-form-actions', blogController.handelFormActions);
// router.get('/edit/:id', blogController.edit);
// router.put('/:id', blogController.update); //sửa post
// router.delete('/:id', blogController.delete); // xóa post
// router.delete('/for ce/:id', blogController.forceDelete);
// router.patch('/restore/:id', blogController.restore);

// router.get('/:slug', blogController.show);

module.exports = router;