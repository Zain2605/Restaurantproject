const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema(
    {
        Name: String
    }, 
    {
        Category: String
    },
    {
        Price: Number
    }
);

const Menu = mongoose.model("Menu", MenuSchema);
module.exports=Menu;