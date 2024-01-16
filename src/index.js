const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./config/db');
const flash = require('connect-flash');
const session = require('express-session');
const { PORT } = require('./config/serverConfig');

const app = express();

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
);

app.use(flash({ sessionKeyName: 'flashMessage' }));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./routes/user'))

app.get('*', (req, res) => {
    res.status(404).render('error');
})

app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);
});