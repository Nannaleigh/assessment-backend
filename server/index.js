const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const items = []
const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",
"Your Javascript skills are stellar.",
];

const fortune = [
  "At the touch of love, everyone becomes a poet.",
  "For hate is never conquered by hate. Hate is conquered by love.",
  "Observe all men, but most of all yourself.", 
  "Society prepares the crime; the criminal commits it.", 
  "Self-knowledge is a life long process."
]
app.get("/api/compliment", (req, res) => {
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];
  res.status(200).send(randomFortune);
  
});
app.listen(4000, () => console.log("Server running on 4000"));
