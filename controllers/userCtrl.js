const fs = require('fs');
const User = require('../models/user');
const Photo = require('../models/photo');
const Event = require('../models/event');
const zlib = require('zlib');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const S3FS = require('s3fs');
const multiparty = require('connect-multiparty')
const multipartyMiddleware = multiparty();


let params = {
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	Bucket: 'eventics'
	// ACL: 'public-read',
	// region: 'us-west-2',
}
let s3fsImpl = new S3FS('eventics', params)


// let s3Bucket = new AWS.S3();
// s3Bucket.config.update(params);

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
	let id = req.params.id
	let photo = req.file.image
	let stream = fs.createReadStream(photo.path);
	return s3fsImpl.writeFile(photo.originalFilename, stream).then(() => {
		fs.unlink(photo.patch, (err) => {
			if(err)
				console.error(err);
		})
		console.log("Success")
	})
	//s3fs


// 	S3S.WriteStream(new S3(), {
//     Bucket: process.env.S3_BUCKEt,
//     Key: process.env.AWS_ACCESS_KEY_ID,
// });

	// Can send a buffer or string
	// let buf = new Buffer(photo,'base64')
 //  let data = {
 //    Key: id,
 //    Body: buf,
 //    ContentEncoding: 'base64',
 //    ContentType: 'image/jpeg'
 //  };
 //   s3Bucket.putObject(data, function(err, data){
 //      if (err) {
 //        console.log(err);
 //        console.log('Error uploading data: ', data);
 //      } else {
 //        console.log('succesfully uploaded the image!');
 //      }
 //  });
	// let body = fs.createReadStream(photo).pipe(zlib.createGzip());
	// let s3obj = new AWS.S3(params);
	// s3obj.upload({Body: body}).
	//   on('httpUploadProgress', function(evt) { console.log(evt); }).
	//   send(function(err, data) { console.log(err, data) });


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


