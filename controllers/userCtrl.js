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


module.exports.photo = (req, res, err) => {
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

module.exports.getEvents = (req, res, err) => {
	Event
		.find()
		.then((events) => {

			console.log({events})
			res.send({events})
		})
}


