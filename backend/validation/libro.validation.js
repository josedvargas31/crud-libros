import { check } from "express-validator";

// validacion de registro de libros
export const validateregisterlibro = [
	check("nombre_libro", "El nombre del libro es obligatorio").notEmpty(),
	check("nombre_autor", "El nombre del autor es obligatorio").notEmpty(),
	check("apellido_autor", "El apellido del autor es obligatorio").notEmpty(),
	check("categoria", "la categoria es obligatoria y son estas opciones: infantil, terror, tecnico, literatura, religioso, otro").notEmpty().isIn(
		"infantil",
		"terror",
		"tecnico",
		"literatura",
		"religioso",
		"otro"
	),
	check("precio", "El precio del libro es obligatorio").notEmpty().isString()
];

// validacion de actualizar de libros
export const validateupdatelibro = [
	check("nombre_libro", "El nombre del libro es obligatorio").notEmpty(),
	check("nombre_autor", "El nombre del autor es obligatorio").notEmpty(),
	check("apellido_autor", "El apellido del autor es obligatorio").notEmpty(),
	check("categoria", "la categoria es obligatoria y son estas opciones: infantil, terror, tecnico, literatura, religioso, otro").notEmpty().isIn(
		"infantil",
		"terror",
		"tecnico",
		"literatura",
		"religioso",
		"otro"
	),
	check("precio", "El precio del libro es obligatorio").notEmpty().isString()
];
