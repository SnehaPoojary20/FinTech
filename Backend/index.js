const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

function categorize(description) {
  const text = description.toLowerCase();
  if (text.includes('uber') || text.includes('fuel')) return 'Transport';
  if (text.includes('zomato') || text.includes('coffee') || text.includes('restaurant')) return 'Food';
  if (text.includes('rent')) return 'Rent';
  if (text.includes('movie') || text.includes('netflix')) return 'Entertainment';
  return 'Other';
}

app.post('/api/expense', (req, res) => {
  const { amount, description } = req.body;
  const category = categorize(description);
  res.json({ amount, description, category });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
