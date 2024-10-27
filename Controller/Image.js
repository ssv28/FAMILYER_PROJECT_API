const Image = require('../Models/image');

exports.ImageAdd = async function (req, res, next) {

    try {

        let ImageAdd = await Image.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Image Add Successfully!",
            data: ImageAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.allImages = async function (req, res, next) {

    try {

        let allImages = await Image.find()
        

        res.status(201).json({
            status: "Success",
            message: "Images Found Successfully!",
            data: allImages

        })

    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ImageDelete = async function (req, res, next) {
    try {
        await Image.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Image deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

