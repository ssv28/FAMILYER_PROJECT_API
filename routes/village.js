let express = require('express');
let router = express.Router();

let villageController = require("../Controller/Village")


router.post('/create', villageController.villageAdd);


module.exports = router;
