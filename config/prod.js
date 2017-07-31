module.exports = {
    mongoose: {
        uri: process.env.MONGODB_URI,
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1,
                },
                poolSize: 5
            }
        }
    },
    jwtsecret: process.env.JWTSECRET,
    crypto: {
        hash: {
            length: 128,
            iterations: 12000
        },
    },
    defaultPhotoUrl: 'https://placekitten.com/g/500/500',
    categoriesPerPage: 20
};
