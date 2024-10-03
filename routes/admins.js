
let express = require('express');
let router = express.Router();

let AdminController = require("../Controller/Admin")


router.post('/create', AdminController.adminCreate);
router.post('/login', AdminController.adminLogin);


module.exports = router;
