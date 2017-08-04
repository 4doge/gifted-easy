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
 */


/**
 * @api {get} api/products/attribute-values/:attribute Get all attribute values by attribute
 * @apiName AttributeValuesByAttribute
 * @apiGroup Products
 * @apiVersion 1.0.0
 *
 * @apiParam {String} attribute Attribute identifier
 *
 * @apiUse JWTHeader
 *
 * @apiUse SingleErrorOrErrorsList
 *
 * @apiSuccess {Object[]} values Array of attribute values
 * @apiSuccess {String} values._id Attribute value identifier
 * @apiSuccess {String} values.value Attribute value value
 */
