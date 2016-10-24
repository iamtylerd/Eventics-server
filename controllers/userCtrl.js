const User = require('../models/user');

module.exports.photo = (req, res, err) => {
	let id = req.params.id
	let photo = req.body.image
	User
		.findByIdAndUpdate(id, {
			$push: {
				photos: photo
			}
		}, {new: true})
		.then((obj) => {
			res.json(obj)
		})
}
