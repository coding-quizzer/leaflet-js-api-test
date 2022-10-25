const express = require('express');
const bodyParser = require("body-parser");


const PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/map-test.html')
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
