const express = require("express")
const cors = require('cors');
const app = express();
const PORT = 2000;

const shoeCollection = require('./shoes.json'); // the JSON file


app.use(cors());
  
app.get('/api/shoes', (req, res) => {
    res.json(shoeCollection);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
