const Donor = require('../Models/donor');

exports.DonorAdd = async function (req, res, next) {

    try {

        let DonorAdd = await Donor.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Donor Add Successfully!",
            data: DonorAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allDonors = async function (req, res, next) {

    try {

        let allDonors = await Donor.find().populate('donorVillage')
        

        res.status(201).json({
            status: "Success",
            message: "Donors Found Successfully!",
            data: allDonors

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.DonorDelete = async function (req, res, next) {
    try {
        await Donor.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Donor deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.DonorEdit = async function (req, res, next) {
    try {
        let DonorEdit  = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(DonorEdit);
        

        res.status(200).json({
            status: 'Success',
            message: 'Donor Updated successfully!',
            data: DonorEdit
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};