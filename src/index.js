const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { PORT } = require('./config/serverConfig');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./routes/customer'))

app.get('*', (req, res) => {
    res.status(404).render('error');
})

app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);
});