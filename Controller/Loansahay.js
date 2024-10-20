let LOANSAHAY = require('../Models/loansahay');

exports.loansahayServiceCreate = async function (req, res, next) {

    try {

        let loansahayServiceCreate = await LOANSAHAY.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Loan-sahay yojana Create Successfully!",
            data: loansahayServiceCreate

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

        let Allservice = await LOANSAHAY.find()

        res.status(200).json({
            status: "Success",
            message: "Loan-sahay yojana Found Successfully!",
            data: Allservice

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.loansahayServiceDelete = async function (req, res, next) {

    try {

        await LOANSAHAY.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Loan-sahay yojana Delete Successfully!",

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}
