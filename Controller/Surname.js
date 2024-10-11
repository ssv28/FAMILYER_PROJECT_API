const SURNAME = require('../Models/surname');

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

        let allSurnames = await SURNAME.find()
        console.log(allSurnames.map((el)=>el.name));
        

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

exports.surnameDelete = async function (req, res, next) {
    try {
        await SURNAME.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Surname deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.surnameEdit = async function (req, res, next) {
    try {
        let surnameEdit  = await SURNAME.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(surnameEdit);
        

        res.status(200).json({
            status: 'Success',
            message: 'Surname Updated successfully!',
            data: surnameEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};