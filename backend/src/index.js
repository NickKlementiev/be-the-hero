const express = require('express');
const cors = require("cors");
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 * Rota / Recurso
 */

/*
 * Métodos HTTP:
 * 
 * GET: buscar informação no back-end
 * POST: criar informação no back-end
 * PUT: alterar informação no back-end
 * DELETE: deletar informação no back-end
 */

/*
 * Tipos de parâmetros:
 *
 * Query params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route params: parâmetros utilizados para identificar recursos 
 * Request body: corpo da requisição utilizado para criar ou alterar recursos
 */

/*
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, ...
 */

/*
 * Driver: SELECT * FROM users; direto do SQL
 * Query builder: table("users").select(*).where(); dentro do JS
 */

app.listen(3333);
