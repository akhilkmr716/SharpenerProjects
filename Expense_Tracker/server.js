const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Expense = require('./models/expense');

const app = express();

const expenseRoutes = require('./routes/expense');

app.use(cors());
app.use(express.json());

sequelize.sync()
    .then(() => { console.log("Database & tables created!!")})
    .catch(err => console.error("Error syncing database:", err));

app.use('/expense', expenseRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})