'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Photo', {
	imageName: {
		type: String,
		required: true,
	},
	eventId: {
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
	},
	userName: {
		type: String,
		required: true
	},
	date: {
		type: Number,
		required: true
	}
})
