let SERVICES = require('../Models/service');

exports.ServiceCreate = async function (req, res, next) {

    try {

        let ServiceCreate = await SERVICES.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Service Create Successfully!",
            data: ServiceCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


