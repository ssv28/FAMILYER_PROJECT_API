let express = require('express');
let router = express.Router();

let loanSahayController = require("../Controller/Loansahay")


router.post('/create', loanSahayController.loansahayServiceCreate);


module.exports = router;
