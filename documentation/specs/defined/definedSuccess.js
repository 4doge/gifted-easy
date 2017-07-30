// ------------------------------------------------------------------------------------------
// ALL
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine SuccessAction
 *
 * @apiSuccess {Boolean} success true
 */

// ------------------------------------------------------------------------------------------
// USERS
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine SuccessUserAuth
 *
 * @apiSuccess {String} token JWT token for User, use in <code>Authorization</code> header
 * @apiSuccess {Object} user  User information
 * @apiSuccess {String} user.fullName User full name
 * @apiSuccess {String} user.photo User photo url
 */
