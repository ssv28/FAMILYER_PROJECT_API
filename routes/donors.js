let express = require('express');
let router = express.Router();

let donorController = require("../Controller/Donor")

router.post('/create', donorController.DonorAdd);
router.get('/all', donorController.allDonors);
router.delete('/delete/:id', donorController.DonorDelete);
router.patch('/update/:id', donorController.DonorEdit);

module.exports = router;
