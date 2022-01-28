const express = require("express");
const cors = require("cors");

const app = express();
const compliment = require("./db.json")

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const fortunes = [ ,
"Say hello to others. You will have a happier day.", 
"Self-knowledge is a life long process.", 
"Remember the birthday but never the age.", 
"Strong reasons make strong actions.", 
"Fortune Not Found: Abort, Retry, Ignore?"

];
const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",,
"Your Javascript skills are stellar.",
];

app.get("/api/compliments", (req, res) => {
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
 
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
});

app.post("/api/compliments", (req, res) => {
 const { compliments } = req.body
 let newCompliment = compliments.push(newCompliment)
})
app.listen(4000, () => console.log("Server running on 4000"));
