// ------------------------------------------------------------------------------------------
// PRODUCTS
// ------------------------------------------------------------------------------------------

/**
 * @api {get} api/products/attributes/:category Get all attributes by category
 * @apiName AttributesByCategory
 * @apiGroup Products
 * @apiVersion 1.0.0
 *
 * @apiParam {String} category Category identifier
 *
 * @apiUse JWTHeader
 *
 * @apiUse SingleErrorOrErrorsList
 *
 * @apiSuccess {Object[]} attributes Array of attribute objects
 * @apiSuccess {String} attributes._id Attribute identifier
 * @apiSuccess {String} attributes.attribute Attribute name
 * @apiSuccess {String} attributes.id Attribute identifier (need for reference)
 * @apiSuccess {Object[]} attributes.values Array of attribute values
 * @apiSuccess {String} attributes.values._id Attribute value identifier
 * @apiSuccess {String} attributes.values.attribute Attribute identifier (need for reference)
 * @apiSuccess {String} attributes.values.value Attribute value
 */
