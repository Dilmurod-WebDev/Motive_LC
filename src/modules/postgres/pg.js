const {Sequelize, DataTypes} = require("sequelize")

const CoursesModel = require('../../models/CoursesModel')
const GroupsModel = require('../../models/GroupsModel')
const SessionsModel = require('../../models/SessionsModel')
const UsersModel = require('../../models/UsersModel')

const relations = require('./relations')
const init = require('./init')

const sequelize = new Sequelize(process.env.DB_URL, {
    logging: false
})


async function postgres(){
    try {
        await sequelize.authenticate();

        let db = {};

        await instantiate(db).then(async () => {
            await relations(db)
            await init(db)
        })

        await sequelize.sync({ force: false })

        return db
    } catch (error) {
        console.log("DATABASE_ERROR", error);
    }
}

async function instantiate(db) {
    db.users = await UsersModel(sequelize, Sequelize)
    db.sessions = await SessionsModel(sequelize, Sequelize)
    db.groups = await GroupsModel(sequelize, Sequelize)
    db.courses = await CoursesModel(sequelize, Sequelize)
}


module.exports = postgres;
