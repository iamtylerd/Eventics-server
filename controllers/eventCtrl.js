const Event = require('../models/event');

module.exports.create = (req, res, err) => {
	console.log(req.body)
	Event
		.create({
			eventName: req.body.eventName,
			location: req.body.location
		})
}
module.exports.photo = (req, res, err) => {
	console.log(req)
	let name = uuid.v4() + '.jpg'
	s3Bucket.upload({Body: req, Key: name, ACL: 'public-read'}).send((err, data) => {
		// res.send(err || data.Location)
		console.log(err || data.Location)
		let url = data.Location
		let id = req.params.id
	Photo
		.create({
			imageName: name,
			eventId: "none",
			userId: id,
			imageUrl: url
		})
		.then((obj) => {
			res.json(obj)
		})
	})
}
