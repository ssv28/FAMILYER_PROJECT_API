let express = require('express');
let router = express.Router();

let userController = require("../Controller/User")


router.post('/create', userController.UserCreate);
router.post('/login', userController.UserLogin);
router.get('/all', userController.allUser);


module.exports = router;
