const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

const NODE_ENV = process.env.NODE_ENV || "development";

// Add custom routes before JSON Server router
server.get("/env", (req, res) => {
  res.jsonp({ env: NODE_ENV, createdAt: Date.now() });
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === "GET") {
//     req.body.createdAt = Date.now();
//   }
//   // Continue to JSON Server router
//   next();
// });

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
