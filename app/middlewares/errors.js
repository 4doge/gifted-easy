module.exports = async function(ctx, next) {
    try {
        await next();
    } catch (e) {
        console.log(e);
        if (e.name === 'ValidationError') {
            ctx.status = 500;
            if (e.hasOwnProperty('details')) {
                ctx.body = {'error': e.details[0].message};
            } else {
                let errorMessages = [];
                for (let errKey in e.errors) {
                    if (e.errors.hasOwnProperty(errKey)) {
                        errorMessages.push(e.errors[errKey].message);
                    }
                }
                ctx.body = {errors: errorMessages};
            }
        }
    }
};
