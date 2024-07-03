const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');
const logger = require('./middlewares/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);

// Routes
app.use('/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});