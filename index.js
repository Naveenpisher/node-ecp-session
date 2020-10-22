
const express = require("express");
const data = require("./data.json")

const app = express();
const port = process.env.PORT || "8000";

app.use('/', express.static(__dirname + '/public'));

app.get("/team", (req, res) => {
    res.status(200).send(data);
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});