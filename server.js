const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let properties = [];

app.get("/properties", (req, res) => {
  res.json(properties);
});

app.post("/properties", (req, res) => {
  const property = req.body;
  property.id = properties.length + 1;
  property.occupied = false; // Default value when adding a new property
  properties.push(property);
  res.status(201).send(property);
});

app.patch("/properties/:id", (req, res) => {
  const { id } = req.params;
  const { occupied } = req.body;
  const property = properties.find((prop) => prop.id == id);
  if (property) {
    property.occupied = occupied;
    res.send(property);
  } else {
    res.status(404).send("Property not found.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
