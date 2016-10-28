const fs = require('fs');
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
const zlib = require('zlib');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const util = require('util');

//S3 init
let params = {
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '491uslr8E8lKZAwqg5X+fA6sD581VLGobAZ4kAs6',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'AKIAJMX5LUMYVSUBZVPA',
	region: 'us-west-2',
}

AWS.config.update(params)

let s3Bucket = new AWS.S3({params: {
	Bucket: 'eventics'
}})

module.exports.create = (req, res, err) => {
	console.log(req.body)
	Event
		.create({
			eventName: req.body.eventName,
			location: req.body.location
		})
		.then((eventObj) => {
			res.send(eventObj)
		})
}
module.exports.photo = (req, res, err) => {
	let eventId = req._parsedOriginalUrl.query
	let name = uuid.v4() + '.jpg'
	s3Bucket.upload({Body: req, Key: name, ACL: 'public-read'}).send((err, data) => {
		// res.send(err || data.Location)
		console.log(err || data.Location)
		let url = data.Location
		let id = req.params.id
		console.log("id", id)
	User
		.findOne({
			_id: id
		})
		.then((userObj) => {
			console.log('userobj', userObj)
			Photo
				.create({
					imageName: name,
					eventId: eventId,
					userId: id,
					imageUrl: url,
					userName: userObj.userName
				})
				.then((obj) => {
					res.json(obj)
				})
		})
	})
}
