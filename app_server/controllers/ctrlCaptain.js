
const winnerlist = function(req, res){
    res.render('captain',{
        winners:
        [
            {year:'2014-2015', player:'Niko Kapanen'},
            {year:'2015-2016', player:'Niko Kapanen'},
            {year:'2016-2017', player:'Peter Regin'},
            {year:'2017-2018', player:'Peter Regin'}
        ]});
};

module.exports = {
    winnerlist
};