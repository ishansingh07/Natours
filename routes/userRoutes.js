const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const multer = require('multer');

const upload = multer({ dest: 'public/img/users' });

const router = express.Router();

router.post('/signup', authController.signup);
router.get('/logout', authController.logout);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword', authController.resetPassword);

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizePhoto,
  userController.updateMe,
);
router.patch('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
