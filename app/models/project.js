import { Sequelize, DataTypes } from "sequelize";

import { db } from "../config/db.js";

const { name, user, password, host, dialect } = db;
const { max, min, acquire, idle } = db.pool;
const sequelize = new Sequelize(name, user, password, {
	host,
	dialect,
	pool: {
		max,
		min,
		acquire,
		idle,
	},
});

sequelize.authenticate().then(() => console.log("connected"));

export const Project = sequelize.define("project", {
	name: {
		type: DataTypes.STRING,
	},
	languages: {
		type: DataTypes.STRING,
	},
	desc: {
		type: DataTypes.STRING,
	},
	license: {
		type: DataTypes.STRING,
	},
	contrib: {
		type: DataTypes.STRING,
	},
	code: {
		type: DataTypes.STRING,
	},
	live: {
		type: DataTypes.STRING,
	},
});

sequelize
	.sync()
	.then(() => console.log("table project created"))
	.catch((err) => console.error(err));
