# Event Ticketing Application

### Author: Ndeye Anta Mbaye
Last updated: May 12, 2025

### Description
This project is an application for an event ticketing sytem. It allows event managers to create and manage their events, and users to book events.

### Technology
Front-end: HTML, CSS, JavaScript \
Back-end: MongoDB, Express.js



## Installation

Before running this project, please install Node using the following command:
```bash
npm init
```
Then, run this command:
```bash
npm install mongoose express dotenv bcrypt qrcode
```
Finally, to run this project, use this command: 
```bash
node server.js
```


## API Documentation

### Events
| Method   | Endpoint                          | Description                      | Parameters                            |
| -------- | --------------------------------- | -------------------------------- | -------------------------------------- |
| `GET`    | `/api/events`                     | Return all events             | None                                   |
| `GET`   | `/api/events/:id`                      | Return one event from ID              | `id`  |
| `GET`    | `/api/events?category=category`                   | Filter events by category               | `category`                      |
| `GET`    | `/api/events?date=date`                   | Filter events by date               | `date`                    |
| `POST`  | `/api/events`                   | Create new event         | `title`, `description`, `category`, `venue`, `date`, `time`, `seatCapacity`, `price`   |
| `PUT`   | `/api/events/:id`          | Update event         | `id`, `title`, `description`, `category`, `venue`, `date`, `time`, `seatCapacity`, `price`  |
| `DELETE`   | `/api/events:id`          | Delete event         | `id` |




### Bookings
| Method   | Endpoint                          | Description                      | Parameters                            |
| -------- | --------------------------------- | -------------------------------- | -------------------------------------- |
| `GET`    | `/api/bookings`                     | Return all bookings             | None                                   |
| `GET`   | `/api/bookings/:id`                      | Return one booking from ID              | `id`  |
| `POST`  | `/api/booking`                   | Create new booking         | `user`, `event`, `quantity`, `bookingDate`, `qrCode`   |


### Authentication
| Method   | Endpoint                          | Description                      | Parameters                            |
| -------- | --------------------------------- | -------------------------------- | -------------------------------------- |
| `POST`    | `/api/auth/register`                     | Register a new user           | `name`, `email`, `password`                                    |
| `POST`   | `/api/auth/login`                      | Login into account              | `email`, `password`  |
