const id = require('pow-mongodb-fixtures').createObjectId;

let categories = exports.categories = {
    category1: {
        _id: id(),
        title: 'Macbook'
    }
};

let attributes = exports.productattributes = {
    // Options for category = "Macbook"
    attr1: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Display'
    },
    attr2: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Storage'
    },
    attr3: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Color'
    },
    attr4: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Memory'
    },
    attr5: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Processor'
    },
    attr6: {
        _id: id(),
        category: categories.category1._id,
        attribute: 'Graphics'
    }
};
