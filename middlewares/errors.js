module.exports = async function(ctx, next) {
    try {
        await next();
    } catch (e) {
        ctx.status = 500;
        if (e.name === 'ValidationError') {
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
        } else {
            ctx.body = {error: '500 error'};
        }
    }
};
