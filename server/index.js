const express = require("express");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const Ddos = require("ddos");
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  const server = express();
  const ddos = new Ddos({ limit: 2000 });
  server.use(ddos.express);
  server.use(handle);
  server.get("/_next*", handle);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
