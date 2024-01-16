const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.homepage);
router.get('/add', userController.addUser);
router.post('/add', userController.postUser);


module.exports = router;