const express = require('express');
const { readFile } = require('fs').promises;

let currentTemp = 25;

const app = express();// create new express instance


app.use(express.static('public'))//to serve the static part of the page.
app.use(express.json());



//Handling get requests
app.get('/index.html', async (request,response) => {

    response.send( await readFile('/','utf8'))
})



app.get('/api/temperature', (req,res) =>{
    res.json({ temp: currentTemp});
});
//handling post requestios
//req, res is are objects created from the reqest/response
/*
Unsure if this post handling is just for post requests to index.html or for all post requests
*/
app.post('/api/temperature', (req,res) => {
    const temp = req.body.temp;//read in temp from the body of the request

    console.log(temp);

    if(temp){
        currentTemp = temp
        res.json({temp: currentTemp})
    } else{
        res.status(400).json({error: 'No temp provided'})
    }

    res.json({temp});


})



app.listen(process.env.PORT || 3000, () => console.log("App is running"))