const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.homepage);
router.get('/add', userController.addUser);
router.post('/add', userController.postUser);
router.get('/view/:id', userController.view);


module.exports = router;