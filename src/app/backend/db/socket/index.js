import { Server } from "socket.io";

let io;

export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Un utilisateur s'est connecté :", socket.id);

    socket.on("disconnect", () => {
      console.log("Un utilisateur s'est déconnecté :", socket.id);
    });
  });

  return io;
}

export function notifyNewPoint(newPoint) {
  if (io) {
    console.log("Émission du nouveau point Wi-Fi :", newPoint);
    io.emit("new-point", newPoint);
  }
}
