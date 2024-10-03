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


