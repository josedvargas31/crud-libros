import { Router } from "express";
import { actualizarlibro, eliminarlibro, listarlibros, registrarlibro } from "../controller/libros.controller.js";
import { validateregisterlibro, validateupdatelibro } from "../../validation/libro.validation.js";
const rutalibros = Router();

rutalibros.get("/listarlibros", listarlibros);
rutalibros.post("/registrarlibro", validateregisterlibro, registrarlibro);
rutalibros.put("/actualizarlibro/:id_libro", validateupdatelibro, actualizarlibro);
rutalibros.delete("/eliminarlibro/:id_libro", eliminarlibro)

export default rutalibros;
