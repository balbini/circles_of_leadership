const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

const app = express();

// View Engine

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
  res.render('index');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// About Us Route
app.get('/about_donna', (req, res) => {
  res.render('about_donna');
});

// Testimonials Route
app.get('/testimonials', (req, res) => {
  res.render('testimonials');
});

// Offered Services Route
app.get('/offered-services', (req, res) => {
  res.render('offered-services');
});

app.listen(port, () => console.log(`Server on ${port}`));
