
# Hotel Booking Web App

A platform built with Node.js(Express.js), React.js and MongoDB(Mongoose) to book hotels and manage rooms 


# Features


## Customer 

- [x]  Search and filter room by type and price.
- [x]  Filter available rooms for the date.
- [x]  Book a room with option to add extra services.
- [ ]  Register after email validation.
- [x]  Login with email and password.
- [x]  Manage and update profile settings.

## Admin 
- [x]  Display all rooms.
- [x]  Add new room.
- [x]  Delete a room.
- [x]  Update a room.
- [ ]  Display all bookings.
- [ ]  Filter booking by upcoming, ongoing and completed.
- [ ]  Dashboard with visual analytics.
- [ ]  Update and manage profile.
# Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/rnimisha/hotel_booking_system.git
```


> Set up required environment variables.

```bash
PORT = PORT_NUMBER
URI = MONGO_URL
SECRET_TOKEN = JWT_TOKEN
```


Install dependencies to start server

```bash
  cd server && npm install && npm start
```

Install dependencies start client

```bash
  cd client && npm install && npm start
```



## Tech Stack

**Client** 
- React.js 
- Redux Toolkit
- Material UI
- Styled Components
- Formik and Yup
- React Router Dom

**Server** 
- Node.js (Express)
- Mongoose 
- joi
- multer
- Json Web Token
- bcrypt

