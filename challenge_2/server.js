const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  request(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05`, (err, response, body) => {
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    res.send(JSON.parse(body));
  });
});


app.listen(port, () => console.log(`Hi, I am listening on port ${port}`));
