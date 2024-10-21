let express = require('express');
let router = express.Router();

let resultController = require("../Controller/Result")


router.post('/create', resultController.resultCreate);


module.exports = router;
