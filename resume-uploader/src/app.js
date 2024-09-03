require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
app.use(express.json());
app.use(resumeRoutes);

sequelize.sync()
    .then(() => {
        app.listen(8080, () => {
            console.log('Server running on port 8080');
        });
    })
    .catch((error) => console.log('Error in syncing database: ', error));