const Event = require('../models/event');

module.exports.create = (req, res, err) => {
	Event
		.create({
			eventName: req.body.eventName,
			location: req.body.location
		})
}
