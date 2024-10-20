let VIDHVASAHAY = require('../Models/service1');

exports.service1Create = async function (req, res, next) {

    try {

        let service1Create = await VIDHVASAHAY.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "vidhva-sahay yojana Create Successfully!",
            data: service1Create

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

        let Allservice = await VIDHVASAHAY.find()

        res.status(200).json({
            status: "Success",
            message: "Services Found Successfully!",
            data: Allservice

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.service1Delete = async function (req, res, next) {

    try {

        await VIDHVASAHAY.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Services Delete Successfully!",

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}