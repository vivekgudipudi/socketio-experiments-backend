require('dotenv').config()
const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://192.168.53.60:3000/",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: "Access-Control-Allow-Origin"
  },
});

io.on("connection", (socket) => {
  console.log("socket is active");

  socket.on("chat", (payload) => {
    // console.log(payload)
    io.emit("chat", payload);
  });
});
const port = process.env.BACKEND_PORT || 7000
server.listen(port, () => console.log(`server is listening at port ${port}...`));
