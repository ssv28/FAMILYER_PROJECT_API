const SURNAME = require('../Models/surname');
let VILLAGE = require('../Models/village');

exports.surnameAdd = async function (req, res, next) {

    try {

        let surnameAdd = await SURNAME.create(req.body)
        console.log(surnameAdd);

        res.status(201).json({
            status: "Success",
            message: "Surname Add Successfully!",
            data: surnameAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allSurnames = async function (req, res, next) {

    try {

        let allSurnames = await VILLAGE.find()
        // console.log(allSurnames);

        res.status(201).json({
            status: "Success",
            message: "Surnames Found Successfully!",
            data: allSurnames

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}