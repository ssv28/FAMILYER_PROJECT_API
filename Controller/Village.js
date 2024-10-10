let VILLAGE = require('../Models/village');

exports.villageAdd = async function (req, res, next) {

    try {

        let villageAdd = await VILLAGE.create(req.body)
        console.log(villageAdd);

        res.status(201).json({
            status: "Success",
            message: "Village Add Successfully!",
            data: villageAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allVillages = async function (req, res, next) {

    try {

        let allVillages = await VILLAGE.find()
        // console.log(allVillages);

        res.status(201).json({
            status: "Success",
            message: "Villages Found Successfully!",
            data: allVillages

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.villageDelete = async function (req, res, next) {
    try {
        await VILLAGE.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Village deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.villageEdit = async function (req, res, next) {
    try {
        let villageEdit  = await VILLAGE.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            status: 'Success',
            message: 'Village Updated successfully!',
            data: villageEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};