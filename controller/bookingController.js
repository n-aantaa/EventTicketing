const Booking = require("../model/Booking");

//Get all bookings
const GetAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found!" });
    }
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get one booking with the ID
const GetBooking = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Booking ID is required!" });
  }
  try {
    const Booking = await Booking.findById(id).exec();
    if (!Booking) {
      return res.status(404).json({ message: `No Booking matches ID ${id}` });
    }
    res.json(Booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create new Booking
const CreateNewBooking = async (req, res) => {
  const { user, event, quantity, bookingDate, qrCode } = req.body;
  if (!quantity) {
    return res.status(400).json({ message: "Quantity is required!" });
  }
  try {
    const result = await Booking.create({ user, event, quantity, bookingDate, qrCode });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    GetAllBookings,
    CreateNewBooking,
    GetBooking
  };