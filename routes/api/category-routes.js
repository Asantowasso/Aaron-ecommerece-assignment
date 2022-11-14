const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    // find one category by its `id` value
    const categories = await Category.findAll({
      
    });
    res.json(categories);

    // be sure to include its associated Products
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(category);

    // be sure to include its associated Products
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try{
  Category.create({
    category_name: req.body.category_name
  })
  .then(function(category){
    res.json(category)
  })
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
