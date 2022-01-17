module.exports = async (Sequelize, sequelize) =>{
    return await sequelize.define("groups", {
        group_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
            allowNull: false
        },
        group_name: {
            type: Sequelize.STRING,
			allowNull: false,
        },
        group_description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        group_time:{
            type: Sequelize.STRING(5),
			allowNull: false,
        },
        group_lesson_duration: {
            type: Sequelize.INTEGER,
			allowNull: false,
        },
        group_course_duration: {
            type: Sequelize.STRING,
			allowNull: false,
        }
    })
}