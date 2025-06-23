const express = require('express');
const { readFile } = require('fs').promises;

const app = express();// create new express instance


app.get('/', async (request,response) => {

    response.send( await readFile('./index.html','utf8'))
})

app.listen(process.env.PORT || 3000, () => console.log("App is running"))