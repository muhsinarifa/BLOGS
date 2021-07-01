const express = require('express');
const appModel = require("./models/appModel");
const app = express();
const blogRoutes = require("./routes/blogRoutes");

app.set('view engine', 'ejs');

//setting up bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(3000);
console.log('listening to 3000');
//in blogroutes
app.use(blogRoutes);
app.use((req, res) => {
    res.render("404");
})