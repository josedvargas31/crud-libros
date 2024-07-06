import Express from "express";
import bodyParser from "body-parser";

import rutalibros from "./src/routes/libros.routes.js";

const servidor = Express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));

servidor.use(rutalibros);

servidor.listen(3000, () => {
	console.log("Funcionando en el puerto 3000");
});
