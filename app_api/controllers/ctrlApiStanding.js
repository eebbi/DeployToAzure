// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'worldCupWinner' model so we can interact with the WorldCupWinners collection
const standingModel = mongoose.model('Standing');

const itemList = function (req, res) {

    standingModel.find({}, function(err, winners){
       if (err){
           res.status(404).json(err);
       }
       else{
           res.status(200).json(winners);
       }
    });
};

const addItem = function (req, res) {
    standingModel.create(req.body, function(err, newStanding){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newStanding);
            }
        }
    );
};

module.exports = {
    itemList,
    addItem
};



