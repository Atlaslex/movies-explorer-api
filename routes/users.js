const router = require('express').Router();

const {
  getUserInfo,
  updateProfile,
} = require('../controllers/users');

const {
  JoiProfileValidate,
} = require('../middlewares/validators');

router.get('/me', getUserInfo);

router.patch('/me', JoiProfileValidate, updateProfile);

module.exports = router;
