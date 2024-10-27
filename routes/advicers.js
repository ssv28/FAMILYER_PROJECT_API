let express = require('express');
let router = express.Router();

let advicerController = require("../Controller/Advicer")

router.post('/create', advicerController.AdvicerAdd);
router.get('/all', advicerController.allAdvicers);
router.delete('/delete/:id', advicerController.AdvicerDelete);
router.patch('/update/:id', advicerController.AdvicerEdit);

module.exports = router;
