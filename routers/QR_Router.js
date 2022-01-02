const express = require("express");
const router = express.Router();
const QR_Controller = require("./../controllers/QR_Controller");
router.post("/qr", QR_Controller);
module.exports = router;