
const express = require('express');
const app = express(); 
const connectdb = require('./db')
const cors = require('cors');
const bodyParser = require('body-parser');
const Menu = require('./models/menumodel');
const port = 5000;
connectdb();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/menu', async (req, res) => {
    const menus = await Menu.find({});
    console.log(menus);
    res.json(menus);
});

const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port no ${port}`);
});
