const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./dbConfig");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

//Routing
const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/bookings");

app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use('/api/auth/register', require('./routes/register'));
app.use('/api/auth/login', require('./routes/auth'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
