const io = require("socket.io")();

io.on("connection", (socket) => {
  console.log(`connect: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });

  setTimeout(() => {
    io.emit("message", Uint8Array.from([0, 1, 2, 3]));
  }, 1000);
});

io.listen(3000, {
  cors: {
    origin: ["http://localhost:19006"],
  },
});
