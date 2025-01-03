const express = require('express');
const app = express();
const port = 3000;

// Exercise 1:

app.get('/greetings/:username', (req, res) => {
    const Alix = req.params.username; 
    res.send(`Yo! What is going on fam, ${Alix}!`); 
  });

  app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
  });

  // Exercise 2:


  app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
  
    if (isNaN(number)) return res.send('You must specify a number.');
  
    res.send(`You rolled a ${Math.floor(Math.random() * (+number + 1))}.`);
  });
  
  app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
  });


  // Exercise 3

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);
  
    if (index < 0 || index >= collectibles.length || isNaN(index)) {
      return res.send('This item is not yet in stock. Check back soon!');
    }
  
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  
  // Exercise 4

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let { minPrice, maxPrice, type } = req.query;
  let filteredShoes = shoes;

  if (minPrice) filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  if (maxPrice) filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  if (type) filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());

  res.json(filteredShoes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

