
const winnerlist = function(req, res){
    res.render('standing',{
        winners:
        [
            {year:'2014-2015', team:'6.'},
            {year:'2015-2016', team:'10.'},
            {year:'2016-2017', team:'13.'},
            {year:'2017-2018', team:'5.'}
        ]});
};
module.exports = {
    winnerlist
};