let express = require('express');
let router = express.Router();

let villageController = require("../Controller/Village")


router.post('/create', villageController.villageAdd);
router.get('/all', villageController.allVillages);



module.exports = router;
