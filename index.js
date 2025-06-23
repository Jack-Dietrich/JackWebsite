const express = require('express');
const { readFile } = require('fs').promises;

const app = express();// create new express instance

app.use(express.static('public'))//to serve the static part of the page.

app.get('/index.html', async (request,response) => {

    response.send( await readFile('/','utf8'))
})

app.listen(process.env.PORT || 3000, () => console.log("App is running"))