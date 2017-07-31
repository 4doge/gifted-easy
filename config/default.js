module.exports = {
    mongoose: {
        uri: 'mongodb://localhost/gifted_easy',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1,
                },
                poolSize: 5
            }
        }
    },
    jwtsecret: 'FN9uTqglv72m33mS',
    crypto: {
        hash: {
            length: 128,
            iterations: 1
        },
    },
    defaultPhotoUrl: 'https://placekitten.com/g/500/500',
    categoriesPerPage: 20
};
