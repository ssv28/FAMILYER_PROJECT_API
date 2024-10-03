let express = require('express');
let router = express.Router();

let userController = require("../Controller/User")


router.post('/create', userController.UserCreate);
router.post('/login', userController.UserLogin);


module.exports = router;
