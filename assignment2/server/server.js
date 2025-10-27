const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const SUPPORTED_STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let userSubscriptions = {};

app.use(express.static(path.join(__dirname, "../client")));

function randomPrice() {
  return (Math.random() * 1000 + 100).toFixed(2);
}

setInterval(() => {
  const prices = {};
  SUPPORTED_STOCKS.forEach(stock => (prices[stock] = randomPrice()));
  io.emit("priceUpdate", prices);
}, 1000);

io.on("connection", socket => {
  console.log(`User connected: ${socket.id}`);

  socket.on("subscribe", stocks => {
    userSubscriptions[socket.id] = stocks;
    socket.emit("subscribed", stocks);
  });

  socket.on("disconnect", () => {
    delete userSubscriptions[socket.id];
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
