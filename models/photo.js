'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Photo', {
	imageName: {
		type: String,
		required: true,
	},
	event: {
		type: String,
		required: true
	},
	location: {
		type: String
	},
	userId: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	}
})
