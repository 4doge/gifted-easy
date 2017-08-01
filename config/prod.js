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
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucketName: 'gifted-easy',
        productsFolder: 'products'
    },
    defaultPhotoUrl: 'https://placekitten.com/g/500/500',
    categoriesPerPage: 20,
    availableCurrencies: ['₴', '₽', '$', '€', '£']
};
