module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
            allowNull: false
        },
        user_login: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
        user_gender: {
			type: Sequelize.ENUM,
			values: ["male", "female"],
			allowNull: false,
		},
		user_password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		user_role: {
			type: Sequelize.ENUM,
			values: ["admin", "teacher", "student"],
			allowNull: false,
		},
        user_name: {
            type: Sequelize.STRING,
			allowNull: false,
        },
		user_phone: {
			type: Sequelize.STRING,
			allowNull: false,
		}
    })
}