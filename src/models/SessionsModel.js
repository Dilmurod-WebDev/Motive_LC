module.exports = async (Sequelize, sequelize) =>{
    return await sequelize.define("sessions", {
        session_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
            allowNull: false
        },
        session_userAgent: {
            type: Sequelize.STRING,
            allowNull: false, 
        }
    })
}