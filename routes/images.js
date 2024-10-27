let express = require('express');
let router = express.Router();

let imageController = require("../Controller/Image")

router.post('/create', imageController.ImageAdd);
router.get('/all', imageController.allImages);
router.delete('/delete/:id', imageController.ImageDelete);

module.exports = router;
