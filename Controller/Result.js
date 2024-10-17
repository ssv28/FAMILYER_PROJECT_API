let RESULT = require('../Models/result');

exports.resultCreate = async function (req, res, next) {

    try {
        console.log(req.file); 
        req.body.resultUrl = req.file.filename

        let resultCreate = await RESULT.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Result Create Successfully!",
            data: resultCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


