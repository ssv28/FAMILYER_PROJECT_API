
let express = require('express');
let router = express.Router();

let ServicesController = require("../Controller/Services")


router.post('/create', ServicesController.ServiceCreate);


module.exports = router;
