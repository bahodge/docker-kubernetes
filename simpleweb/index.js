const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("hey there");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
