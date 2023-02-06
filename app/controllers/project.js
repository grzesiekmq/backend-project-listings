import { Project } from "../models/project.js";

export function create(req, res) {
	const project = {
		name: req.body.name,
		languages: req.body.languages,
		desc: req.body.desc,
		license: req.body.license,
		contrib: req.body.contrib,
		code: req.body.code,
		live: req.body.live,
	};

	Project.create(project)
		.then((data) => res.send(data))
		.catch((err) => console.error(err));
}

export function findAll(req, res) {
	Project.findAll().then((data) => res.send(data));
}

export function findOne(req, res) {
	const id = req.params.id;
	Project.findByPk(id).then((data) => res.send(data));
}

export function update(req, res) {
	const id = req.params.id;

	Project.update(req.body, { where: { id } }).then((data) => res.send(data));
}

export function remove(req, res) {
	const id = req.params.id;
	Project.destroy({ where: { id } }).then(() =>
		res.send({ message: "deleted project" })
	);
}

export function deleteAll(req, res) {
	Project.destroy({ where: {} }).then(() =>
		res.send({ message: "deleted all projects" })
	);
}
