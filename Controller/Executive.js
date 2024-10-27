const Executive = require('../Models/executive');

exports.ExecutiveAdd = async function (req, res, next) {

    try {

        let ExecutiveAdd = await Executive.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Executive Add Successfully!",
            data: ExecutiveAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allExecutives = async function (req, res, next) {

    try {

        let allExecutives = await Executive.find().populate('yourVillage')
        

        res.status(201).json({
            status: "Success",
            message: "Executives Found Successfully!",
            data: allExecutives

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ExecutiveDelete = async function (req, res, next) {
    try {
        await Executive.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Executive deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.ExecutiveEdit = async function (req, res, next) {
    try {
        let ExecutiveEdit  = await Executive.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(ExecutiveEdit);
        

        res.status(200).json({
            status: 'Success',
            message: 'Executive Updated successfully!',
            data: ExecutiveEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};