const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() =>{
    console.log("connect to DB");
}).catch((err) =>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) =>{
    res.send("I am root");
});

app.get("/testListing", async (req, res) =>{
    let sampleListing = new Listing({
        title: "My new villa",
        description: "By the Beach",
        price: 1200,
        location: "calangute, Goa",
        country: "india",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("succesful testing");
});

app.listen(8080,() =>{
    console.log("server is listening to port 8080");
});