const { Router } = require("express");
const Recipe = require("./recipe-model");

const router = Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.getRecipes();
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred." });
  }
});
router.get("/recipes/:id/shoppingList", async (req, res) => {
  try {
    const ingredients = await Recipe.getShoppingList(req.params.id);
    res.json(ingredients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred." });
  }
});
router.get("/recipes/:id/instructions", async (req, res) => {
  try {
    const instructions = await Recipe.getInstructions(req.params.id);
    res.json(instructions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
