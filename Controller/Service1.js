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


