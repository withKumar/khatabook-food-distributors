const Express = require('express');
const logger = require('morgan');


//require('./db');

//route Definations
const BusinessRoute = require('./routes/business.route');
const InvoiceRoute = require('./routes/invoices.route');
const ItemRoute = require('./routes/items.route');


const exphbs = require('express-handlebars');



const app = Express();

app.use(Express.urlencoded({ extended : true }));
app.use(Express.json());

//Logging in console
app.use(logger('dev'));

//handlebars setup

app.engine('hbs', exphbs({
    extname : '.hbs',
    defaultLayout : 'main',
    helpers : require('./public/js/helper.js')
}));
app.set('view engine', 'hbs');

//Routes

app.get('/',(req, res) => {
    res.render('index');
})

app.get('/login',(req, res) => {
    res.render('login');
})

app.use('/business', BusinessRoute);
app.use('/invoice', InvoiceRoute);
app.use('/items', ItemRoute);

app.listen(5500, () => console.log('App Running on Port 5500'));


module.exports = app;