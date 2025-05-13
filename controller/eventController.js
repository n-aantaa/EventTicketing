const Event = require("../model/Event");

//Get all events
const GetAllEvents = async (req, res) => {
  try {
    const event = await Event.find();
    if (!event || event.length === 0) {
      return res.status(404).json({ message: "No events found!" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get one event with the ID
const GetEvent = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Event ID is required!" });
  }
  try {
    const event = await Event.findById(id).exec();
    if (!event) {
      return res.status(404).json({ message: `No event matches ID ${id}` });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Filter events by category
const FilterEventsByCategory = async (req, res) => {
  const { category } = req.params;
  if (!category) {
    return res.status(400).json({ message: "Event category is required!" });
  }
  try {
    const event = await Event.findByCategory(category).exec();
    if (!event) {
      return res.status(404).json({ message: `No event matches category: ${category}` });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
}
//Filter events by date
const FilterEventsByDate = async (req, res) => {
  const { date } = req.params;
  if (!date) {
    return res.status(400).json({ message: "Date is required!" });
  }
  try {
    const event = await Event.findByDate(date).exec();
    if (!event) {
      return res.status(404).json({ message: `No events found!` });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
}
//Create new event
const CreateNewEvent = async (req, res) => {
  const { title, description, category, venue, date, time, seatCapacity, bookedSeat, price } = req.body;
  if (!title || !date || !seatCapacity || !price) {
    return res.status(400).json({ message: "Title, date, seat capacity and price are required!" });
  }
  try {
    const result = await Event.create({ title, description, category, venue, date, time, seatCapacity, bookedSeat, price });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update existing event
const UpdateEvent = async (req, res) => {
  const { id, title, description, category, venue, date, time, seatCapacity, bookedSeat, price } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Event ID is required!" });
  }
  try {
    const event = await Event.findById(id).exec();
    if (!event) {
      return res.status(404).json({ message: `No event matches ID ${id}` });
    }
    if (title) event.title = title;
    if (description) event.description = description;
    if (category) event.category = category;
    if (venue) event.venue = venue;
    if (date) event.date = date;
    if (time) event.time = time;
    if (seatCapacity) event.seatCapacity = seatCapacity;
    if (bookedSeat) event.bookedSeat = bookedSeat;
    if (price) event.price = price;
    const result = await event.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete event
const DeleteEvent = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Event ID is required!" });
  }
  try {
    const event = await Event.findById(id).exec();
    if (!event) {
      return res.status(404).json({ message: `No Event matches ID ${id}` });
    }
    const result = await event.deleteOne({ _id: id });
    res.json({ message: "Event deleted", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  GetAllEvents,
  CreateNewEvent,
  FilterEventsByCategory,
  FilterEventsByDate,
  UpdateEvent,
  DeleteEvent,
  GetEvent,
};