let ADMIN = require('../Models/admin');
let bcrypt = require("bcrypt")

exports.adminCreate = async function (req, res, next) {

    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let adminCreate = await ADMIN.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Admin Create Successfully!",
            data: adminCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.adminLogin = async function (req, res, next) {
    try {

        let adminLogin = await ADMIN.findOne({ email: req.body.email })
        if (!adminLogin) throw new Error("Admin Record Not Found!")

        let passwordCompare = await bcrypt.compare(req.body.password, adminLogin.password)
        if (!passwordCompare) throw new Error("Password Invalid!")


        res.status(200).json({
            status: "Success",
            message: "Admin Login Successfully!",
            data: adminLogin

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}
