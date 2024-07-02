const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MONGODB_URI = process.env.ATLAS;

const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Allow cross-origin requests from any domain
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// Connect to the database
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Routes
app.use("/api", apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
