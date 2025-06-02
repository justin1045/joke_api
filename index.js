import express from "express";
import cors from "cors";
import jokes from "./jokes.js"; // note the .js extension is required in ESM

const app = express();
const PORT = process.env.PORT || 1010;

app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Random Jokes API!');
});

// Random joke endpoint
app.get('/api/jokes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({
    joke: jokes[randomIndex]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
