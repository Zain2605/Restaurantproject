// const connectdb=require('./db')
// //const app = require("./src/app");
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express(); 
// connectdb();

// const port = 4000;
// const router = require('../server/routes/menu')
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use('/menu', router);

// app.listen(process.env.PORT || port, () => {
//     console.log(`Listening on port no ${port}`);
// });


const express = require('express');
const app = express(); 
const connectdb = require('./db')

//const Menu = require('./models/menumodel');
const port = 5000;
connectdb();

app.use(express.json())


app.use('/api/menu', require('./routes/menu'))


// app.get('./menu', async (req, res) => {
//     const menus = await Menu.find({});
//     console.log(menus);
//     // res.json(studentData);
// });


app.listen(port, () => {
    console.log(`Listening on port no ${port}`);
});
