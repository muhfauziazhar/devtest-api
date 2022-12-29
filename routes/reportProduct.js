const express = require("express");
const router = express.Router();
const reportProductController = require("../controllers/reportProduct");

router.get("/", reportProductController.getReportProduct);

module.exports = router;
