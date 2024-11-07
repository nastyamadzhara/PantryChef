const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
console.log("Mongo URI: ", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Підключено до MongoDB"))
    .catch((err) => console.error("Помилка підключення до MongoDB:", err));

// Роутинг
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const apiKey = process.env.SPOONACULAR_API_KEY;

// Маршрут для пошуку рецептів за інгредієнтами
app.get("/api/recipes", async (req, res) => {
  const { ingredients } = req.query;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`,
      {
        params: {
          ingredients: ingredients,
          apiKey: apiKey,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Помилка при отриманні рецептів" });
  }
});

// Маршрут для отримання детальної інформації про рецепт
app.get("/api/recipe/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: { apiKey: apiKey },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Помилка при отриманні інформації про рецепт" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
