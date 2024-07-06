import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

// crud de listar libros
export const listarlibros = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM libros");

		if (result.length > 0) {
			res.status(200).json({
				status: 200,
				message: "Lista de libros",
				data: result,
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No hay libros para listar",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// crud de registrar libro
export const registrarlibro = async (req, res) => {
	try {
		const { nombre_libro, nombre_autor, apellido_autor, categoria, precio } =
			req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const [result] = await pool.query(
			"INSERT INTO libros (nombre_libro, nombre_autor, apellido_autor, categoria, precio) VALUES (?,?,?,?,?)",
			[nombre_libro, nombre_autor, apellido_autor, categoria, precio]
		);
		if (result.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Se registro con exito el libro " + nombre_libro,
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No se registro el libro",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// crud de actualizar libro
export const actualizarlibro = async (req, res) => {
	try {
		const { id_libro } = req.params;
		const { nombre_libro, nombre_autor, apellido_autor, categoria, precio } =
			req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const [result] = await pool.query(
			"UPDATE libros SET nombre_libro=?, nombre_autor=?, apellido_autor=?, categoria=?, precio=? WHERE id_libro=?",
			[nombre_libro, nombre_autor, apellido_autor, categoria, precio, id_libro]
		);
		if (result.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Se actualizo con exitó el libro " + nombre_libro,
				data: result,
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No se actualizo el libro",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// crud de eliminar libro
export const eliminarlibro = async (req, res) => {
	try {
		const { id_libro } = req.params;
		const [result] = await pool.query("DELETE FROM libros WHERE id_libro=?", [
			id_libro,
		]);
		if (result.affectedRows) {
			res.status(200).json({
				status: 200,
				message: "Se elimino con exito el libro con el id " + id_libro,
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No se pudo eliminar el libro",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};
