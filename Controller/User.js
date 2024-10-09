let USER = require('../Models/user');

exports.UserCreate = async function (req, res, next) {

    try {

        let UserCreate = await USER.create(req.body)
        console.log(UserCreate);

        res.status(201).json({
            status: "Success",
            message: "User Create Successfully!",
            data: UserCreate

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.UserLogin = async function (req, res, next) {
    try {

        let userLogin = await USER.findOne({ contactNumber: req.body.contactNumber })
        if (!userLogin) throw new Error("User Record Not Found!")


        res.status(200).json({
            status: "Success",
            message: "User Login Successfully!",
            data: userLogin

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}


exports.allUser = async function (req, res, next) {

    try {

        let allUser = await USER.find().populate('villageName').populate('surname')
        console.log(allUser.map((el) => el.surname.name));
        // console.log(allUser.map((el) => el.villageName.name));

        res.status(201).json({
            status: "Success",
            message: "Users Found Successfully!",
            data: allUser

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}