const Advicer = require('../Models/advicer');

exports.AdvicerAdd = async function (req, res, next) {

    try {

        let AdvicerAdd = await Advicer.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Advicer Add Successfully!",
            data: AdvicerAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allAdvicers = async function (req, res, next) {

    try {

        let allAdvicers = await Advicer.find().populate('yourVillage')
        

        res.status(201).json({
            status: "Success",
            message: "Advicers Found Successfully!",
            data: allAdvicers

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AdvicerDelete = async function (req, res, next) {
    try {
        await Advicer.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Advicer deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.AdvicerEdit = async function (req, res, next) {
    try {
        let AdvicerEdit  = await Advicer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(AdvicerEdit);
        

        res.status(200).json({
            status: 'Success',
            message: 'Advicer Updated successfully!',
            data: AdvicerEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};