const express = require('express');
const sequelize = require('./config/db');

const app = express();
app.use(express.json());

// Import routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Use routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
}).catch(err => console.log('Database connection failed:', err));