module.exports = async (db) => {
    // --- users && sessions --- \\

    await db.users.hasMany(db.sessions, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.sessions.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    // --- courses && groups --- \\

    await db.courses.hasMany(db.groups, {
        foreignKey: {
            name: "course_id",
            allowNull: false
        }
    })

    await db.groups.belongsTo(db.courses, {
        foreignKey: {
            name: "course_id",
            allowNull: false
        }
    })

    // --- groups && users --- \\

    await db.groups.hasMany(db.users, {
        foreignKey: {
            name: "group_id",
            allowNull: false
        }
    })

    await db.users.belongsTo(db.groups, {
        foreignKey: {
            name: "group_id",
            allowNull: false
        }
    }) 
}