const express = require('express');
const ctrl = require('../controllers');
const router = express.Router();
const userCtrl = ctrl.userCtrl;

router.get('/get-all-users', userCtrl.getAllUsersCtrl);

router.get('/find-user', userCtrl.findUserCtrl);

module.exports = router;
