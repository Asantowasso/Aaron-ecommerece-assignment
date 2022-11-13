// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
  Products.belongsTo(Category,{

  })
// Categories have many Products
  Category.hasMany(Product,{

  })
// Products belongToMany Tags (through ProductTag)
  Products.belongstoMany(ProductTag,{

  })
// Tags belongToMany Products (through ProductTag)
  Tags.belongstoMany(ProductTag, {
    
  })
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
