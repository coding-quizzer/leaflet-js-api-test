const express = require('express');
const bodyParser = require("body-parser");


const PORT = 8080;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/map-test.html')
});

app.post('/points', (req, res) => {
  console.log(req.body);
  res.send(req.body['point-name']);
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
