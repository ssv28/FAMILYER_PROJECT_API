let express = require('express');
let router = express.Router();

let surnamesController = require("../Controller/Surname")


router.post('/create', surnamesController.surnameAdd);
router.get('/all', surnamesController.allSurnames);



module.exports = router;
