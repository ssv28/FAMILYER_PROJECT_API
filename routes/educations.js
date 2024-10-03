let express = require('express');
let router = express.Router();

let services1Controller = require("../Controller/Education")


router.post('/create', services1Controller.educationServiceCreate);


module.exports = router;
