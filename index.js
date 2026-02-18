const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Set EJS and views
app.set('view engine', 'ejs');
app.set('views', './views/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the route
const userRoute = require('./routes/userRoute');
app.use('/', userRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});