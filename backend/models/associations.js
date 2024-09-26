const Product = require('./Product');
const Feedback = require('./Feedback');
const User = require('./User');

// Define associations here
Product.hasMany(Feedback, { foreignKey: 'productId' });
Feedback.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Feedback, { foreignKey: 'userId' });
Feedback.belongsTo(User, { foreignKey: 'userId' });

module.exports = { Product, Feedback, User };
