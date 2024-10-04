let USER = require('../Models/user');

exports.UserCreate = async function (req, res, next) {
    try {
        let UserCreate = await USER.create(req.body);
        res.status(201).json({
            status: "Success",
            message: "User Created Successfully!",
            data: UserCreate
        });
    } catch (error) {
        if (error.name === 'MongoError' && error.code === 11000) {
            res.status(400).json({
                status: "Fail",
                message: "Contact number already exists!"
            });
        } else {
            res.status(404).json({
                status: "Fail",
                message: error.message
            });
        }
    }
};


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
