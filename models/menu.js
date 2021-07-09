const Sequelize = require('sequelize');

module.exports = class Menu extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING,
            },
            img: {
                type: Sequelize.STRING,
            },
            like: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            category1: {
                type: Sequelize.STRING,
            },
            category2: {
                type: Sequelize.STRING,
            },
            category3: {
                type: Sequelize.STRING,
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Menu',
            tableName: 'menus',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db) {
        db.Menu.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });
        db.Menu.hasMany(db.Comment, { foreignKey: 'menuId', sourceKey: 'id' });
    }
}