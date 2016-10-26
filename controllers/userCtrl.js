const fs = require('fs')
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
const sF = require('../factories/storageFactory')
const zlib = require('zlib');
const AWS = require('aws-sdk');

// const S3 = require('aws-sdk').S3;
// const S3S = require('s3-streams');

let params = {
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	Bucket: process.env.S3_BUCKEt
}

module.exports.photo = (req, res, err) => {
	let id = req.params.id
	let photo = req.body.image
// 	S3S.WriteStream(new S3(), {
//     Bucket: process.env.S3_BUCKEt,
//     Key: process.env.AWS_ACCESS_KEY_ID,
// });

	// Can send a buffer or string
	var body = fs.createReadStream(photo).pipe(zlib.createGzip());
	var s3obj = new AWS.S3(params);
	s3obj.upload({Body: body}).
	  on('httpUploadProgress', function(evt) { console.log(evt); }).
	  send(function(err, data) { console.log(err, data) });


	// console.log(req)
 //  req.pipe(createWriteStream('test.png'))
 //  req.on('end', () => res.send('OK'))
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


