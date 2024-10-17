let express = require('express');
let router = express.Router();

let resultController = require("../Controller/Result")

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/create', upload.single("resultUrl") ,resultController.resultCreate);


module.exports = router;
