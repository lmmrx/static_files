const express = require('express');
const ejs = require('ejs');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

//setup view engine
app.set("views", "./views");
app.set("view engine", "ejs");

//middlewear to serve static files
app.use(express.static('public/images'));

//route handler that handles the view
app.get("/", (req, res) => {
    res.render('home');
});

//listening on port 8080
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});




