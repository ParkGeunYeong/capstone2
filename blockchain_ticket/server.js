const express = require('express')
const app = express()
const port = 3000

const fs = require("fs")


app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);


const server = app.listen(port, () => console.log(`App listening on port [${port}]!`));

app.use(express.static('public'));

const router = require('./router/main')(app);
