let express = require('express');
let router = express.Router();

let villagersController = require("../Controller/Villager")


router.post('/create', villagersController.villagerAdd);
router.get('/all', villagersController.allVillagers);
router.delete('/delete/:id', villagersController.villagerDelete);
router.patch('/update/:id', villagersController.villagerEdit);



module.exports = router;
