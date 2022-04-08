const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(cookParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//index



//Routers
app.get('/', (req, res) => {
    res.render('index')
})


app.get('/service', (req, res) => {
    res.render('service')
});

app.get('/product', (req, res) => {
    res.render('product')
})

app.get('/auto-engineer', (req, res) => {
    res.render('auto_engi')
})

app.get('/admin', (req, res) => {
    res.render('admin/index')
})





module.exports = app;