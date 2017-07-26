const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('config');
const jwt = require('jwt-simple');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full Name can\'t be empty!'
    },
    email: {
        type: String,
        unique: '{VALUE} is already exist!',
        required: 'Email can\'t be empty!',
        validate: {
            validator: function checkEmail(value) {
                const re = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
                return re.test(value);
            },
            message: '{VALUE} is not a valid email!'
        },
    },
    photo: {
        type: String,
        default: config.defaultPhotoUrl
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    passwordHash: {
        type: String
    },
    salt: {
        type: String
    },
}, {
    timestamps: true
});

userSchema.virtual('password')
    .set(function(password) {
        if (!password) {
            this.invalidate('password', 'Password can\'t be empty!');
        }

        if (password !== undefined) {
            if (password.length < 6) {
                this.invalidate('password', 'Password can\'t be less than 6 symbols!');
            }
        }

        this._plainPassword = password;

        if (password) {
            this.salt = crypto.randomBytes(config.crypto.hash.length).toString('base64');
            this.passwordHash = crypto.pbkdf2Sync(
                password,
                this.salt,
                config.crypto.hash.iterations,
                config.crypto.hash.length,
                'sha1'
            ).toString('base64');
        } else {
            this.salt = undefined;
            this.passwordHash = undefined;
        }
    })
    .get(function() {
        return this._plainPassword;
    });

userSchema.methods.checkPassword = function(password) {
    if (!password) return false;
    if (!this.passwordHash) return false;

    return crypto.pbkdf2Sync(
        password,
        this.salt,
        config.crypto.hash.iterations,
        config.crypto.hash.length,
        'sha1').toString('base64') === this.passwordHash;
};

userSchema.methods.getAuthData = function () {
    const payload = {
        id: this._id,
        email: this.email
    };
    return {
        token: jwt.encode(payload, config.jwtsecret),
        user: {
            fullName: this.fullName,
            photo: this.photo
        }
    };
};

userSchema.plugin(beautifyUnique);

module.exports = mongoose.model('User', userSchema);
