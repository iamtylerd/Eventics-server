const fs = require('fs');
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
const zlib = require('zlib');
const AWS = require('aws-sdk');
const uuid = require('uuid');




let params = {
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '491uslr8E8lKZAwqg5X+fA6sD581VLGobAZ4kAs6',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'AKIAJMX5LUMYVSUBZVPA',
	region: 'us-west-2',
}

AWS.config.update(params)

let s3Bucket = new AWS.S3({params: {
	Bucket: 'eventics'
}})


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
		.then((events) => {
			console.log({events})
			res.send({events})
		})
}

module.exports.sendEventPhotos = (req, res, err) => {
	Promise.all([
		Photo
		.find({
			eventId: req.params.id
		}),
		Event
		.find({
			_id: req.params.id
		})
		])
		.then((eventObj) => {
			console.log({eventObj})
			res.send({eventObj})
		})
}


