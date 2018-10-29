// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'Captain' model so we can interact with the GoldenBallWinners collection
const captainModel = mongoose.model('Captain');

const itemList = function (req, res) {
    captainModel.find({}, function(err, winners){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(winners);
        }
    });};

const addItem = function (req, res) {
    res
        .status(201)
        .json({"Add player" : "Work in progress"});
};

module.exports = {
    itemList,
    addItem
};