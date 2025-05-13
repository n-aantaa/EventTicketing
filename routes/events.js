const express = require("express");
const router = express.Router();

//Event routes
const {
  GetAllEvents,
  GetEvent,
  FilterEventsByCategory,
  FilterEventsByDate,
  CreateNewEvent,
  UpdateEvent,
  DeleteEvent
} = require("../controller/eventController");


router
  .route("/")
  .get(GetAllEvents)
  .get(FilterEventsByCategory)
  .get(FilterEventsByDate)
  .post(CreateNewEvent)
  .put(UpdateEvent)
  .delete(DeleteEvent);

router
  .route("/:id")
  .get(GetEvent);

module.exports = router;
