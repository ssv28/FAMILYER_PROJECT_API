let express = require('express');
let router = express.Router();

let surnamesController = require("../Controller/Surname")


router.post('/create', surnamesController.surnameAdd);
router.get('/all', surnamesController.allSurnames);
router.delete('/delete/:id', surnamesController.surnameDelete);



module.exports = router;
