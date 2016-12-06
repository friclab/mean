/* GET home page. */
module.exports.homelist = function(req, res, next) {
	res.render('index', {
		title : 'Homelist'
	})
};

module.exports.locationInfo = function(req, res, next) {
	res.render('index', {
		title : 'Location Info'
	})
};

module.exports.addReview = function(req, res, next) {
	res.render('index', {
		title : 'Add Review'
	})
};