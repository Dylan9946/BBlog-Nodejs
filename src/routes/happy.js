// xử lý riêng về tin tức
// phần path

const express = require("express");
const router = express.Router();

const happyController = require("../app/controllers/HappyController");

// happyController.index
// các tuyến đường của happy
// happy/
router.get("/", happyController.index);
module.exports = router;
