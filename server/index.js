const express = require('express');
const app = express(); 
const connectdb = require('./db')

const Menu = require('./models/menumodel');
const port = 5000;
connectdb();

app.get('/menu', async (req, res) => {
    const menus = await Menu.find({});
    console.log(menus);
    res.json(menus);
});


app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port no ${port}`);
});