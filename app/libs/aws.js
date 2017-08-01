const AWS = require('aws-sdk');
const config = require('config');

let options = {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey
};

AWS.config.update(options);


module.exports = AWS;
