module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("teachers", {
        teacher_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            allowNull: false
        },
        teacher_login: {
            type: Sequelize.STRING(64),
            allowNull: false,
            unique: true
        },
        teacher_password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        teacher_gender: {
            type: Sequelize.ENUM,
            values: ["male", "famale"],
            allowNull: false
        },
        teacher_phone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}