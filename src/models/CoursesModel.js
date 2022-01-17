module.exports = async (Sequelize, sequelize) =>{
    return await sequelize.define("courses", {
        course_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
            allowNull: false
        },
        course_name: {
            type: Sequelize.STRING,
			allowNull: false,
        },
        course_description: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
}