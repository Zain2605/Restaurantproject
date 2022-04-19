const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    Name: String, 
    Category: String,
    Price: Number
    
});

module.exports = mongoose.model("Menu", MenuSchema);