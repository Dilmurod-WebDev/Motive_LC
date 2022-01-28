const { generateCrypt } = require("../bcrypt");

module.exports = async function init(db){
    const count = await db.users.count();

	if (count == 0) {
		const admin = await db.users.create({
			user_name: "admin",
			user_email: "admin@admin.com",
			user_password: generateCrypt("admin"),
			user_gender: "male",
			user_role: "admin",
			country_id: 1,
		});

		console.log(admin.dataValues);
	}
}