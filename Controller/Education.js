let EDUCATION = require('../Models/education');

exports.educationServiceCreate = async function (req, res, next) {

    try {

        let educationServiceCreate = await EDUCATION.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Shaishnik sahay yojana Create Successfully!",
            data: educationServiceCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


