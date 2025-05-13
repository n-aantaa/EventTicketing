const express = require("express");
const router = express.Router();

//Booking routes
const {
  GetAllBookings,
  GetBooking,
  CreateNewBooking
} = require("../controller/bookingController");



router
  .route("/")
  .get(GetAllBookings)
  .post(CreateNewBooking);

router
  .route("/:id")
  .get(GetBooking)

module.exports = router;
