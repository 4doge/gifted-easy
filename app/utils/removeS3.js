const config = require('config');

const AWS = require('../libs/aws');

const s3 = new AWS.S3();


module.exports = function(folder, file) {
    return new Promise(function(resolve, reject){
        let filename = folder + '/' + file;
        let params = {
            Bucket: config.aws.bucketName,
            Delete: {
                Objects: [
                    {
                        Key: filename
                    }
                ]
            }
        };

        s3.deleteObjects(params, function(err, data) {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });

    });
};
