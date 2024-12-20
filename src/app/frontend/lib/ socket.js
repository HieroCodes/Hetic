import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connect", () => {
  console.log("Connecté au serveur Socket.io :", socket.id);
});

export default socket;
