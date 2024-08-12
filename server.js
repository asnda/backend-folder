const express = require('express');
const sequelize = require('./config/db');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5002;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});