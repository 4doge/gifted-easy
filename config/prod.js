module.exports = {
    mongoose: {
        uri: 'mongodb://heroku_vzc2zgpt:l7k6mt82mo3d831cets0hdugee@ds125113.mlab.com:25113/heroku_vzc2zgpt',
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
            iterations: 12000
        },
    },
    defaultPhotoUrl: 'https://placekitten.com/g/500/500',
    categoriesPerPage: 20
};
