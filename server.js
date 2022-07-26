const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5050;

// Mongodb specific stuff
mongoose.connect("mongodb://localhost/<collection_name>");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("DB connected...");
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: Number,
    department: String,
});

const User = mongoose.model("user", UserSchema);

// Express specific stuff
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello from express");
});



app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
