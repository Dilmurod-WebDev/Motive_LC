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