const config = require('config');
const fixtures = require('pow-mongodb-fixtures').connect(config.mongoose.uri, config.mongoose.options);


fixtures.clearAllAndLoad(__dirname + '/data.js', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully load data!');
    }
    fixtures.close(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully close connection!');
        }
    });
});
