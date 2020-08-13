const { validationResult } = require("express-validator");
const Data = require('../models/Data');
exports.getData = async (req, res, next) => {
    try {
        const data = await Data.find({});
        res.json({data});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            data: [],
            msg: 'Server error'
        });
    }
    return next();
}
exports.addData = async (req, res, next) => {
    const errors = validationResult(req);  
    if( !errors.isEmpty() ){
        res.status(400).json({errors: errors.array()});
        return next();
    }
    try {
        let newData = Data(req.body);
        await newData.save();
        res.json(newData);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server error'});
    }
    return next();
}