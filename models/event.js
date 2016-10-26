'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Event', {
	eventName: {
		type: String,
		required: true,
	},
	location: {
		type: String
	}
})
