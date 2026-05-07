const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = [];

app.post("/api/bookings", (req, res) => {
  bookings.push(req.body);
  res.send("Booking Added");
});

app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(3000, () => console.log("Server running"));
