const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
}); //By default the path is set to "/" if not explicitly mentioned

app.listen(3000);