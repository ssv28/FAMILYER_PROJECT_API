let express = require('express');
let router = express.Router();

let services1Controller = require("../Controller/Education")


router.post('/create', services1Controller.educationServiceCreate);
router.get('/all', services1Controller.Allservice);
router.delete('/delete/:id', services1Controller.educationServiceDelete);

module.exports = router;
