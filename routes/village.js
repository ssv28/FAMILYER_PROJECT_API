let express = require('express');
let router = express.Router();

let villageController = require("../Controller/Village")


router.post('/create', villageController.villageAdd);
router.get('/all', villageController.allVillages);
router.delete('/delete/:id', villageController.villageDelete);
router.patch('/update/:id', villageController.villageEdit);



module.exports = router;
