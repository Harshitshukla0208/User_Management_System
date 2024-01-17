const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.homepage);
router.get('/add', userController.addUser);
router.post('/add', userController.postUser);
router.get('/view/:id', userController.view);
router.get('/edit/:id', userController.edit);
router.put('/edit/:id', userController.editPost);
router.delete('/edit/:id', userController.deleteUser);
router.post('/search', userController.searchUser);

module.exports = router;