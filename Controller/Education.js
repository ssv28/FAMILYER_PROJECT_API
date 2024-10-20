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


exports.Allservice = async function (req, res, next) {

    try {

        let Allservice = await EDUCATION.find()

        res.status(200).json({
            status: "Success",
            message: "Shaishnik sahay yojana Found Successfully!",
            data: Allservice

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.educationServiceDelete = async function (req, res, next) {

    try {

        await EDUCATION.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Shaishnik sahay yojana Delete Successfully!",

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}