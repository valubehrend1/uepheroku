const express = require('express');
const multer = require('multer');

const upload = multer()


const usersRouter = express.Router();
const userController = require('../controllers/userControllers');


usersRouter.post('/email', upload.single('file'), userController.email);

module.exports = usersRouter;