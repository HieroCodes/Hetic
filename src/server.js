import { createServer } from "http";
import { initSocket } from "../src/app/backend/db/socket/index.js";
import next from "next";

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();

const server = createServer((req, res) => {
  handler(req, res);
});

const io = initSocket(server);

server.listen(4000, () => {
  console.log("Serveur prêt sur http://localhost:4000");
});

export { io };
