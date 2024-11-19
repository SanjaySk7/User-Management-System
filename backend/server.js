const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRouter=require("./routes/eventRouter");
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });



app.use('/', eventRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
