const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    Name: String, 
    Category: String,
    Price: Number
    
});

const Menu = new mongoose.model("Menu", MenuSchema);
module.exports = Menu;