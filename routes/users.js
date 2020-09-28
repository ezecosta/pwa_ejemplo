var express = require('express');
var router = express.Router();
var usersAdminController = require("../controllers/usersAdmnController");

router.post('/', usersAdminController.create);

module.exports = router;
