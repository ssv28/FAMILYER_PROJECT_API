let express = require('express');
let router = express.Router();

let executiveController = require("../Controller/Executive")

router.post('/create', executiveController.ExecutiveAdd);
router.get('/all', executiveController.allExecutives);
router.delete('/delete/:id', executiveController.ExecutiveDelete);
router.patch('/update/:id', executiveController.ExecutiveEdit);

module.exports = router;
