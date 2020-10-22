
const express = require("express");
const data = require("./data.json")

const app = express();
const port = process.env.PORT || "8000";


app.get("/", (req, res) => {
    res.status(200).send("Helow ECP Team");
});
app.get("/team", (req, res) => {
    res.status(200).send(data);
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});