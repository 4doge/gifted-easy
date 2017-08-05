define({ "api": [  {    "type": "post",    "url": "api/accounts/auth",    "title": "Authenticate user",    "name": "AuthUser",    "group": "Accounts",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password</p>"          }        ]      }    },    "filename": "documentation/specs/accounts.js",    "groupTitle": "Accounts",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>JWT token for User, use in <code>Authorization</code> header</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User information</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.fullName",            "description": "<p>User full name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.photo",            "description": "<p>User photo url</p>"          }        ]      }    }  },  {    "type": "post",    "url": "api/accounts/sign-up",    "title": "Sign up user",    "name": "SignUpUser",    "group": "Accounts",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "fullName",            "description": "<p>User full name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password</p>"          }        ]      }    },    "filename": "documentation/specs/accounts.js",    "groupTitle": "Accounts",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>JWT token for User, use in <code>Authorization</code> header</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User information</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.fullName",            "description": "<p>User full name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.photo",            "description": "<p>User photo url</p>"          }        ]      }    }  },  {    "type": "post",    "url": "api/categories/",    "title": "Create a new category",    "name": "CreateCategory",    "group": "Categories",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Category title</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "category",            "description": "<p>Category object</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "category._id",            "description": "<p>Category identifier</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "category.title",            "description": "<p>Category title</p>"          }        ]      }    },    "filename": "documentation/specs/categories.js",    "groupTitle": "Categories",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    }  },  {    "type": "delete",    "url": "api/categories/",    "title": "Delete category",    "name": "DeleteCategory",    "group": "Categories",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Category identifier</p>"          }        ]      }    },    "filename": "documentation/specs/categories.js",    "groupTitle": "Categories",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>true</p>"          }        ]      }    }  },  {    "type": "get",    "url": "api/categories",    "title": "Get categories",    "name": "GetCategories",    "group": "Categories",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "categories",            "description": "<p>Array of categories</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "categories._id",            "description": "<p>Category identifier</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "categories.title",            "description": "<p>Category title</p>"          }        ]      }    },    "filename": "documentation/specs/categories.js",    "groupTitle": "Categories",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    }  },  {    "type": "put",    "url": "api/categories/",    "title": "Update category",    "name": "UpdateCategory",    "group": "Categories",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Category identifier</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Category title</p>"          }        ]      }    },    "filename": "documentation/specs/categories.js",    "groupTitle": "Categories",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>true</p>"          }        ]      }    }  },  {    "type": "get",    "url": "api/products/attributes/:category",    "title": "Get all attributes by category",    "name": "AttributesByCategory",    "group": "Products",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "category",            "description": "<p>Category identifier</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "attributes",            "description": "<p>Array of attribute objects</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes._id",            "description": "<p>Attribute identifier</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes.attribute",            "description": "<p>Attribute name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes.id",            "description": "<p>Attribute identifier (need for reference)</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "attributes.values",            "description": "<p>Array of attribute values</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes.values._id",            "description": "<p>Attribute value identifier</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes.values.attribute",            "description": "<p>Attribute identifier (need for reference)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "attributes.values.value",            "description": "<p>Attribute value</p>"          }        ]      }    },    "filename": "documentation/specs/products.js",    "groupTitle": "Products",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error message</p>"          },          {            "group": "Error 4xx",            "type": "String[]",            "optional": false,            "field": "errors",            "description": "<p>Array of errors messages</p>"          }        ]      }    }  }] });
