const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/projectdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on("error", (error) => {
    console.log("Error connecting to the database: ", error);
});

db.once("open", () => {
    console.log("Connected to the database successfully!");
});

module.exports = db;