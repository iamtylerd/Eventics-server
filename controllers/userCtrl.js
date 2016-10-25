const fs = require('fs')
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
let sF = require('../factories/storageFactory')

module.exports.photo = (req, res, err) => {
	let id = req.params.id
	let photo = req.body.image
	console.log(req.body)
	// User
	// 	.findByIdAndUpdate(id, {
	// 		$push: {
	// 			photos: photo
	// 		}
	// 	}, {new: true})

		// .then((obj) => {
		// 	res.json(obj)
		// })
}
