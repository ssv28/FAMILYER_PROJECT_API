const VILLAGER = require('../Models/villager');

exports.villagerAdd = async function (req, res, next) {

    try {

        let villagerAdd = await VILLAGER.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Villager Add Successfully!",
            data: villagerAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allVillagers = async function (req, res, next) {

    try {

        let allVillagers = await VILLAGER.find().populate('yourVillage')
        

        res.status(201).json({
            status: "Success",
            message: "Villagers Found Successfully!",
            data: allVillagers

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.villagerDelete = async function (req, res, next) {
    try {
        await VILLAGER.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Villager deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.villagerEdit = async function (req, res, next) {
    try {
        let villagerEdit  = await VILLAGER.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(villagerEdit);
        

        res.status(200).json({
            status: 'Success',
            message: 'Villager Updated successfully!',
            data: villagerEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};