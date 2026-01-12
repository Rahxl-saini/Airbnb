const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/snow-covered-mountains-under-a-pink-sky-gH2wZOYK-KQ",
        set: (v) => v === ""? "https://unsplash.com/photos/snow-covered-mountains-under-a-pink-sky-gH2wZOYK-KQ" : v,
    },    
    price: Number,
    location: String,
    country: String,
});

module.exports = mongoose.model("Listing", listingSchema);