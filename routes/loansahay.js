let express = require('express');
let router = express.Router();

let loanSahayController = require("../Controller/Loansahay")


router.post('/create', loanSahayController.loansahayServiceCreate);
router.get('/all', loanSahayController.Allservice);
router.delete('/delete/:id', loanSahayController.loansahayServiceDelete);


module.exports = router;
