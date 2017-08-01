const config = require('config');
const s3Stream = require('s3-upload-stream');
const fs = require('fs');

const AWS = require('../libs/aws');

const s3 = s3Stream(new AWS.S3());


module.exports = function(folder, file) {
    return new Promise(function(resolve, reject){
        let timestamp = + new Date();
        let filename = folder + '/' + timestamp + '.png';

        let upload = s3.upload({
            'Bucket': config.aws.bucketName,
            'Key': filename
        });

        upload.on('error', function (error) {
            return reject(error);
        });

        upload.on('uploaded', function (details) {
            return resolve(details.Location);
        });

        const readable = fs.createReadStream(file);
        readable.pipe(upload);
    });
};
