var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */

router.post('/register', userController.createUser);

router.get('/', userController.findUser);

module.exports = router;
