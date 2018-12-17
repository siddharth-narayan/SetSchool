const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("hello");
});

app.get("/:name", (request, response) => {
    response.send(`hello ${request.params.name}`);
});

app.listen(3000);
