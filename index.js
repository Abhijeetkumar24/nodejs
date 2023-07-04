const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = Number(num1) + Number(num2);
    res.json({ result });
    res.send(result);
  });

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) - Number(num2);
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) * Number(num2);
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) / Number(num2);
  res.json({ result });
});

app.post('/power', (req, res) => {
  const { base, exponent } = req.body;
  const result = Math.pow(Number(base), Number(exponent));
  res.json({ result });
});

app.post('/square-root', (req, res) => {
  const { number } = req.body;
  const result = Math.sqrt(Number(number));
  res.json({ result });
});

app.post('/percentage', (req, res) => {
  const { num1, num2 } = req.body;
  const result = (Number(num1) / Number(num2)) * 100;
  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
