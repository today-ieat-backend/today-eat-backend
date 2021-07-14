const Sequelize = require("sequelize");
const User = require("./user");
const Menu = require("./menu");
const Comment = require("./comment");


const env = process.env.NODE_ENV || 'development';
console.log("env!@#!@#!23", env);
const config = require("../config/config")[env];
console.log("config!@#!@#!23", config);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Menu = Menu;
db.Comment = Comment;

User.init(sequelize);
Menu.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Menu.associate(db);
Comment.associate(db);

module.exports = db;
