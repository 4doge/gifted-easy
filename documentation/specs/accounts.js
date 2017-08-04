// ------------------------------------------------------------------------------------------
// ACCOUNTS
// ------------------------------------------------------------------------------------------

/**
 * @api {post} api/accounts/auth Authenticate user
 * @apiName AuthUser
 * @apiGroup Accounts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 *
 * @apiUse SingleErrorOrErrorsList
 * @apiUse SuccessUserAuth
 */


/**
 * @api {post} api/accounts/sign-up Sign up user
 * @apiName SignUpUser
 * @apiGroup Accounts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} fullName User full name
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 *
 * @apiUse SingleErrorOrErrorsList
 * @apiUse SuccessUserAuth
 */
