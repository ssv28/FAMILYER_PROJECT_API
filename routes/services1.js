let express = require('express');
let router = express.Router();

let services1Controller = require("../Controller/Service1")


router.post('/create', services1Controller.service1Create);
router.get('/all', services1Controller.Allservice);


module.exports = router;
