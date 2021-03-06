const fs = require('fs');
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
const zlib = require('zlib');
const AWS = require('aws-sdk');
const uuid = require('uuid');




// module.exports.getUrl = (req, res, next) => {
// 	  let paramsSign = {
// 	    Bucket: 'eventics',
// 	    Key: uuid.v4(),
// 	    Expires: 100,
// 	    ContentType: 'image/jpeg'
// 	  };
// 	  s3Bucket.getSignedUrl('putObject', paramsSign, function(err, signedUrl) {
// 	  	if (err) {
// 	  		console.log(err);
// 	  		return next(err);
// 	  	} else {
// 	  		return res.json({
// 	  			postURL: signedUrl,
// 	  			getURL: signedUrl.split("?")[0]
// 	  		})
// 	  	}
// 	  })
// }


module.exports.getEvents = (req, res, err) => {
	Event
		.find()
		.sort({date: -1})
		.then((events) => {
			console.log({events})
			res.send({events})
		})
}

module.exports.sendEventPhotos = (req, res, err) => {
	let count = req.body.count
	Promise.all([
		Photo
		.find({
			eventId: req.body.id
		}).sort({date: -1}).skip(count).limit(10),
		Event
		.find({
			_id: req.body.id
		})
		])
		.then((eventObj) => {
			console.log({eventObj})
			res.send({eventObj})
		})
}

	module.exports.getUser = (req, res, err) => {
		User
			.find({
				_id: req.params.id
			})
			.then((userObj) => {
				res.send({userObj})
			})
	}

	module.exports.getUserPhotos = (req, res, err) => {
		Photo
			.find({
				userId: req.params.id
			})
			.then((photosObj) => {
				res.send({photosObj})
			})
	}


