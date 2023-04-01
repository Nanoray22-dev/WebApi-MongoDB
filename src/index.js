const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/user")
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api',userRoutes);


//routes
app.get("/", (req, res) => {
    res.send("welcome to my api");
});

// Mongodb connections
mongoose.connect(
    process.env.MONGODB_URI
).then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));


app.listen(port, ()=> console.log("server listening on port 9000", port)); 