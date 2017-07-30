// ------------------------------------------------------------------------------------------
// CATEGORIES
// ------------------------------------------------------------------------------------------

/**
 * @api {get} api/categories/:page Get categories
 * @apiName GetCategories
 * @apiGroup Categories
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Page number(starting from <code>0</code>)
 *
 * @apiUse SingleErrorOrErrorsList
 *
 * @apiSuccess {Object[]} categories Array of categories
 * @apiSuccess {String} categories._id Category identifier
 * @apiSuccess {String} categories.title Category title
 */


/**
 * @api {post} api/categories/ Create a new category
 * @apiName CreateCategory
 * @apiGroup Categories
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title Category title
 *
 * @apiUse SingleErrorOrErrorsList
 *
 * @apiSuccess {Object} category Category object
 * @apiSuccess {String} category._id Category identifier
 * @apiSuccess {String} category.title Category title
 */


/**
 * @api {delete} api/categories/ Delete category
 * @apiName DeleteCategory
 * @apiGroup Categories
 * @apiVersion 1.0.0
 *
 * @apiParam {String} _id Category identifier
 *
 * @apiUse SingleErrorOrErrorsList
 * @apiUse SuccessAction
 */


/**
 * @api {put} api/categories/ Update category
 * @apiName UpdateCategory
 * @apiGroup Categories
 * @apiVersion 1.0.0
 *
 * @apiParam {String} _id Category identifier
 * @apiParam {String} title Category title
 *
 * @apiUse SingleErrorOrErrorsList
 * @apiUse SuccessAction
 */

